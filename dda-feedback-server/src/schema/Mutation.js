export default `
  type Mutation {
    addFeedback(
      description: String!,
      name: String!,
      phone: String,
      email: String!
    ): Feedback

    voteUp(id: Int!): Feedback

    voteDown(id: Int!): Feedback
  }
`;
