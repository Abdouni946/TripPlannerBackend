import { IsString, IsArray, IsNumber, IsBoolean, IsDate, IsOptional, ValidateNested, IsEmail } from 'class-validator';
import { Type } from "class-transformer";

class ActivityDto {
  @IsString()
  name: string;

  @IsDate()
  @Type(() => Date)
  time: Date;

  @IsString()
  description: string;
}

class EmergencyContactDto {
  @IsString()
  name: string;

  @IsString()
  phone: string;

  @IsString()
  relationship: string;
}

export class CreateTripDto {
  @IsString()
  title: string;

  @IsString()
  mainDestination: string;

  @IsDate()
  @Type(() => Date)
  startDate: Date;

  @IsDate()
  @Type(() => Date)
  endDate: Date;

  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  intermediateStops?: string[];

  @IsString()
  transportMode: string;

  @IsArray()
  @IsString({ each: true })
  interests: string[];

  @IsNumber()
  budget: number;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ActivityDto)
  @IsOptional()
  activities?: ActivityDto[];

  @IsArray()
  @IsEmail({}, { each: true })
  @IsOptional()
  companions?: string[];

  @IsString()
  accommodationType: string;

  @IsNumber()
  accommodationBudget: number;

  @IsArray()
  @IsString({ each: true })
  mealPreferences: string[];

  @IsBoolean()
  insuranceRequired: boolean;

  @IsBoolean()
  visaRequired: boolean;

  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  languages?: string[];

  @IsNumber()
  numberOfTravelers: number;

  @IsString()
  @IsOptional()
  specialRequirements?: string;

  @ValidateNested()
  @Type(() => EmergencyContactDto)
  @IsOptional()
  emergencyContact?: EmergencyContactDto;
}
