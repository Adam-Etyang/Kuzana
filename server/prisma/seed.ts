import 'dotenv/config'
import { PrismaClient, Role, DayOfWeek } from '@/generated/prisma/client.js'
import { PrismaPg } from '@prisma/adapter-pg'
import { faker } from '@faker-js/faker'
import { hashPassword } from 'better-auth/crypto'

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL || '' })
const prisma = new PrismaClient({ adapter })

// Shared password for all seeded users so they can sign in via better-auth.
// (better-auth requires a credential Account row with a hashed password.)
const SEED_PASSWORD = 'Password123!'

async function createUserWithCredentials(data: {
  email: string
  name: string
  role: Role
  emailVerified?: boolean
  image?: string
}) {
  const user = await prisma.user.create({ data })
  const hash = await hashPassword(SEED_PASSWORD)
  await prisma.account.create({
    data: {
      userId: user.id,
      providerId: 'credential',
      accountId: user.id,
      password: hash,
    },
  })
  return user
}

const randomVector = (dim = 5): number[] =>
  Array.from({ length: dim }, () => parseFloat(Math.random().toFixed(4)))

async function main() {
  console.log('🌱 Seeding users, profiles, and related data...')

  // ─────────────────────────────────────────
  // CLEAN SLATE (respect FK order)
  // ─────────────────────────────────────────
  console.log('Cleaning existing data...')
  await prisma.message.deleteMany()
  await prisma.conversationParticipant.deleteMany()
  await prisma.conversation.deleteMany()
  await prisma.match.deleteMany()
  await prisma.mentorshipRequest.deleteMany()
  await prisma.availability.deleteMany()
  await prisma.profileSkill.deleteMany()
  await prisma.profileInterest.deleteMany()
  await prisma.profile.deleteMany()
  // await prisma.mentorProfile.deleteMany() // REMOVED - table no longer exists
  await prisma.account.deleteMany()
  await prisma.session.deleteMany()
  await prisma.verification.deleteMany()
  await prisma.user.deleteMany()
  await prisma.skill.deleteMany()
  await prisma.interest.deleteMany()

  // ─────────────────────────────────────────
  // 1. SKILLS & INTERESTS
  // ─────────────────────────────────────────
  console.log('Seeding skills & interests...')
  const skillNames = [
    'JavaScript', 'TypeScript', 'Python', 'Go', 'Rust',
    'Data Science', 'Machine Learning', 'Product Management',
    'UX Design', 'Leadership', 'Public Speaking', 'Career Development',
    'Academic Writing', 'Research Methods', 'Networking', 'Entrepreneurship'
  ]
  const interestNames = [
    'Web Development', 'AI / ML', 'Startups', 'Research',
    'Open Source', 'Career Growth', 'Networking', 'Mentorship',
    'Cloud Computing', 'Cybersecurity', 'Mobile Development', 'DevOps'
  ]

  const skills = await Promise.all(
    skillNames.map(name => prisma.skill.create({ data: { name } }))
  )
  const interests = await Promise.all(
    interestNames.map(name => prisma.interest.create({ data: { name } }))
  )

  // ─────────────────────────────────────────
  // 2. USERS
  // ─────────────────────────────────────────
  console.log('Seeding users...')

  const admin = await createUserWithCredentials({
    email: 'admin@mentorlink.com',
    name: 'System Admin',
    role: Role.ADMIN,
    emailVerified: true,
  })

  const mentors = await Promise.all(
    Array.from({ length: 6 }).map((_, i) =>
      createUserWithCredentials({
        email: `mentor${i + 1}@example.com`,
        name: faker.person.fullName(),
        role: Role.MENTOR,
        emailVerified: true,
        image: faker.image.avatar(),
      })
    )
  )

  const mentees = await Promise.all(
    Array.from({ length: 12 }).map((_, i) =>
      createUserWithCredentials({
        email: `mentee${i + 1}@example.com`,
        name: faker.person.fullName(),
        role: Role.MENTEE,
        emailVerified: true,
        image: faker.image.avatar(),
      })
    )
  )

  // ─────────────────────────────────────────
  // 3. PROFILES (for BOTH mentors and mentees)
  // ─────────────────────────────────────────
  console.log('Seeding profiles...')
  const faculties = ['Engineering', 'Science', 'Business', 'Arts', 'Medicine']
  const departments = [
    'Computer Science', 'Physics', 'Marketing', 'Psychology', 'Biology',
    'Electrical Engineering', 'Mathematics', 'Economics', 'Design', 'Chemistry'
  ]

  // Mentee profiles
  const menteeProfiles = await Promise.all(
    mentees.map((mentee, i) =>
      prisma.profile.create({
        data: {
          userId: mentee.id,
          firstName: faker.person.firstName(),
          lastName: faker.person.lastName(),
          yearOfStudy: faker.number.int({ min: 1, max: 4 }),
          faculty: faculties[i % faculties.length],
          department: departments[i % departments.length],
          goalStatement: faker.lorem.paragraph(2),
          goalVector: randomVector(),
          // Mentee fields: leave mentor-specific fields null/default
          maxMentees: null,
          currentMentees: 0,
          isAvailable: null,
          bio: null,
        }
      })
    )
  )

  // Mentor profiles (consolidated into Profile table)
  const mentorProfiles = await Promise.all(
    mentors.map((mentor, i) =>
      prisma.profile.create({
        data: {
          userId: mentor.id,
          firstName: faker.person.firstName(),
          lastName: faker.person.lastName(),
          yearOfStudy: faker.number.int({ min: 3, max: 5 }), // Mentors are more senior
          faculty: faculties[i % faculties.length],
          department: departments[i % departments.length],
          goalStatement: faker.lorem.paragraph(2),
          goalVector: randomVector(),
          // Mentor-specific fields
          maxMentees: faker.number.int({ min: 1, max: 5 }),
          currentMentees: 0,
          isAvailable: true,
          bio: faker.lorem.paragraphs(2),
        }
      })
    )
  )

  // ─────────────────────────────────────────
  // 4. PROFILE SKILLS & INTERESTS (for ALL profiles)
  // ─────────────────────────────────────────
  console.log('Linking skills & interests to profiles...')
  
  const allProfiles = [...menteeProfiles, ...mentorProfiles]
  
  await Promise.all(
    allProfiles.map(profile => {
      // Give mentors slightly more skills on average
      const minSkills = profile.maxMentees ? 3 : 2
      const maxSkills = profile.maxMentees ? 6 : 5
      
      const profileSkills = faker.helpers.arrayElements(
        skills,
        faker.number.int({ min: minSkills, max: maxSkills })
      )
      const profileInterests = faker.helpers.arrayElements(
        interests,
        faker.number.int({ min: 2, max: 5 })
      )

      return Promise.all([
        ...profileSkills.map(skill =>
          prisma.profileSkill.create({
            data: { profileId: profile.id, skillId: skill.id }
          })
        ),
        ...profileInterests.map(interest =>
          prisma.profileInterest.create({
            data: { profileId: profile.id, interestId: interest.id }
          })
        )
      ])
    })
  )

  // ─────────────────────────────────────────
  // 5. AVAILABILITY (for ALL profiles)
  // ─────────────────────────────────────────
  console.log('Seeding availability...')
  const days = Object.values(DayOfWeek)

  await Promise.all(
    allProfiles.map(profile => {
      const numSlots = faker.number.int({ min: 2, max: 5 })
      const selectedDays = faker.helpers.arrayElements(days, numSlots)

      return Promise.all(
        selectedDays.map(day =>
          prisma.availability.create({
            data: {
              profileId: profile.id,
              dayOfWeek: day,
              startTime: `${faker.number.int({ min: 8, max: 14 })}:00`,
              endTime: `${faker.number.int({ min: 15, max: 20 })}:00`,
            }
          })
        )
      )
    })
  )

  // ─────────────────────────────────────────
  // SUMMARY
  // ─────────────────────────────────────────
  console.log('✅ Seed completed!')
  console.table([
    { entity: 'Admins', count: 1 },
    { entity: 'Mentors', count: mentors.length },
    { entity: 'Mentees', count: mentees.length },
    { entity: 'Total Profiles', count: allProfiles.length },
    { entity: 'Skills', count: skills.length },
    { entity: 'Interests', count: interests.length },
  ])

  console.log('\n🔑 Login credentials (all users share the same password):')
  console.log(`   Password: ${SEED_PASSWORD}\n`)
  console.table([
    { role: 'ADMIN', email: admin.email, password: SEED_PASSWORD },
    { role: 'MENTOR', email: mentors[0].email, password: SEED_PASSWORD },
    { role: 'MENTEE', email: mentees[0].email, password: SEED_PASSWORD },
  ])
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
