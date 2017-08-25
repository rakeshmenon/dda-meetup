export default `
  type Query {
    feedbackList: [Feedback]

    feedback(id: Int!): Feedback

    _allFeedbackMeta: ResultsMeta
  }
`;
