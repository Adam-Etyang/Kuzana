export class CreateApplicationDto {
  fullName!: string;
  email!: string;
  organization!: string;
  position!: string;
  yearsExperience!: string;
  linkedin?: string;
  expertise!: string;
  motivation!: string;
}

export class ValidateAccessKeyDto {
  key!: string;
  email!: string;
}
