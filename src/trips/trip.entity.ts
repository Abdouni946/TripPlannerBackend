import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { User } from '../users/user.entity';

@Entity('trips')
export class Trip {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  mainDestination: string;

  @Column({ type: 'timestamp' })
  startDate: Date;

  @Column({ type: 'timestamp' })
  endDate: Date;

  @Column('simple-array', { nullable: true })
  intermediateStops: string[];

  @Column()
  transportMode: string;

  @Column('simple-array')
  interests: string[];

  @Column('decimal', { precision: 10, scale: 2 })
  budget: number;

  @Column('jsonb', { nullable: true })
  activities: Array<{
    id: number;
    name: string;
    time: Date;
    description: string;
  }>;

  @Column('simple-array', { nullable: true })
  companions: string[];

  @Column()
  accommodationType: string;

  @Column('decimal', { precision: 10, scale: 2 })
  accommodationBudget: number;

  @Column('simple-array')
  mealPreferences: string[];

  @Column()
  insuranceRequired: boolean;

  @Column()
  visaRequired: boolean;

  @Column('simple-array', { nullable: true })
  languages: string[];

  @Column()
  numberOfTravelers: number;

  @Column({ nullable: true })
  specialRequirements: string;

  @Column('jsonb', { nullable: true })
  emergencyContact: {
    name: string;
    phone: string;
    relationship: string;
  };

  @ManyToOne(() => User, user => user.trips)
  user: User;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
