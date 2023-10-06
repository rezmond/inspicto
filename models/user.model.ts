import {
  PrimaryKey,
  AllowNull,
  Column,
  Model,
  Table,
} from 'sequelize-typescript';

@Table
export class User extends Model {
  @PrimaryKey
  id: number;

  @Column
  login: string;

  @Column
  email: string;

  @AllowNull
  @Column({ field: 'first_name' })
  firstName: string;

  @AllowNull
  @Column({ field: 'last_name' })
  lastName: string;

  @Column({ field: 'is_active', type: 'boolean', defaultValue: true })
  isActive: boolean;
}
