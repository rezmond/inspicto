import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'myuser',
  password: 'mypassword',
  database: 'mydatabase',
  entities: ['./src/**/entities/*.ts'],
  migrations: ['./migrations/*.ts'],
});

AppDataSource.initialize();
