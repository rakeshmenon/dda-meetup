import Sequelize from 'sequelize';

const sequelize = new Sequelize('ddameetup', 'ddameetup', 'ddameetup', {
  host: 'localhost',
  dialect: 'mysql'
});

export default sequelize;
