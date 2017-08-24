import Sequelize from 'sequelize';
import Feedback from '../../models/Feedback';

export default async (_, { id }) => {
  console.log(
    await Feedback.update(
      {
        downvotes: Sequelize.literal('downvotes + 1')
      },
      {
        where: { id }
      }
    )
  );

  return await Feedback.findById(id);
};
