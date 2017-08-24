import Feedback from '../../models/Feedback';
import pubsub from '../pubsub';

export default async (_, args) => {
  const newFeedback = await Feedback.create({
    description: args.description,
    from: args.name,
    phone: args.phone || null,
    email: args.email
  });

  pubsub.publish('feedbackAdded', { feedbackAdded: newFeedback.dataValues });

  return newFeedback;
};
