import { DayOfWeek } from '@/generated/prisma/client.js';
import { AvailabilityDto } from './create-profile.dto.js';

export class UpdateProfileDto {
  firstName?: string;
  lastName?: string;
  yearOfStudy?: number;
  faculty?: string;
  department?: string;
  goalStatement?: string;
  skills?: string[];
  interests?: string[];
  availability?: AvailabilityDto[];
}
