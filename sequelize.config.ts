import { Sequelize } from 'sequelize-typescript';

const sequelize = new Sequelize({
  database: 'mydatabase',
  username: 'myuser',
  password: 'mypassword',
  dialect: 'postgres',
  models: ['./src/**/*.model.ts'],
  define: {
    timestamps: true,
  },
});

export default sequelize;
