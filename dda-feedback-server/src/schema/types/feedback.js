export default `
  type Feedback {
    # ID of the feedback item
    id: Int!

    # Feedback Description
    description: String!

    # Name of the feedback provider
    from: String!

    # Phone number
    phone: String

    # Email ID
    email: String!

    # Up votes
    upvotes: Int!

    # Down votes
    downvotes: Int!
  }
`;
