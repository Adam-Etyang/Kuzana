import { DayOfWeek } from '../../../generated/prisma/client.js';

export class AvailabilityDto {
  dayOfWeek!: DayOfWeek;
  startTime!: string;
  endTime!: string;
}

export class CreateProfileDto {
  firstName!: string;
  lastName!: string;
  yearOfStudy?: number;
  faculty!: string;
  department!: string;
  goalStatement!: string;
  skills!: string[];
  interests!: string[];
  availability!: AvailabilityDto[];
}
