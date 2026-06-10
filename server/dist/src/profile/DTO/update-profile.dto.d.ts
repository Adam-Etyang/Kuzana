import { AvailabilityDto } from './create-profile.dto.js';
export declare class UpdateProfileDto {
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
