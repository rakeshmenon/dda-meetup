import Feedback from '../../models/Feedback';

export default async () => {
  return await Feedback.findAll({
    order: [['id', 'DESC']]
  });
};
