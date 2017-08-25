import Sequelize from 'sequelize';
import sequelize from '../database';

const Feedback = sequelize.define('feedbacks', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },

  description: {
    type: Sequelize.STRING,
    allowNull: false
  },

  from: {
    type: Sequelize.STRING,
    allowNull: false
  },

  phone: {
    type: Sequelize.STRING
  },

  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  },

  upvotes: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },

  downvotes: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  }
});

export default Feedback;
