import React from 'react';
import { graphql, gql } from 'react-apollo';

const FeedbackForm = props => {
  let nameInput = null;
  let emailInput = null;
  let phoneInput = null;
  let descriptionArea = null;

  const handleFeedbackSubmit = async e => {
    e.preventDefault();

    const variables = {
      description: descriptionArea.value,
      name: nameInput.value,
      phone: phoneInput.value,
      email: emailInput.value
    };

    await props.addFeedbackAction({
      variables
    });

    props.history.push('/');
  };

  return (
    <form action="" onSubmit={handleFeedbackSubmit}>
      <p>
        <label htmlFor="name">
          <strong>Name</strong>
        </label>
        <input
          type="text"
          name="from"
          id="name"
          ref={input => (nameInput = input)}
        />
      </p>
      <p>
        <label htmlFor="phone">
          <strong>Phone</strong>
        </label>
        <input
          type="text"
          name="phone"
          id="phone"
          ref={input => (phoneInput = input)}
        />
      </p>
      <p>
        <label htmlFor="email">
          <strong>Email</strong>
        </label>
        <input
          type="text"
          name="email"
          id="email"
          ref={input => (emailInput = input)}
        />
      </p>
      <p>
        <label htmlFor="desc">
          <strong>Description</strong>
        </label>
        <textarea
          type="text"
          name="description"
          id="desc"
          ref={area => (descriptionArea = area)}
        />
      </p>
      <input type="submit" value="Submit Feedback!" />
    </form>
  );
};

const ADD_FEEDBACK_MUTATION = gql`
  mutation addFeedbackAction(
    $description: String!
    $name: String!
    $email: String!
    $phone: String
  ) {
    addFeedback(
      description: $description
      name: $name
      email: $email
      phone: $phone
    ) {
      id
    }
  }
`;

export default graphql(ADD_FEEDBACK_MUTATION, { name: 'addFeedbackAction' })(
  FeedbackForm
);
