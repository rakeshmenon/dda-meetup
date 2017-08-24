import React from 'react';
import { graphql, gql } from 'react-apollo';

const FeedbackItem = props => {
  const handleLikeClick = e => {
    e.preventDefault();
    props.handleAction(props.details.id, props.voteUpAction);
  };

  const handleDislikeClick = e => {
    e.preventDefault();
    props.handleAction(props.details.id, props.voteDownAction);
  };

  return (
    <li>
      <p>
        {props.details.description} <br />-{' '}
        <strong>{props.details.from}</strong>
      </p>
      <div>
        <a href="#" onClick={handleLikeClick}>
          Like ({props.details.upvotes})
        </a>&nbsp;|&nbsp;
        <a href="#" onClick={handleDislikeClick}>
          Dislike ({props.details.downvotes})
        </a>
      </div>
    </li>
  );
};

const VOTE_UP_MUTATION = gql`
  mutation voteUpAction($id: Int!) {
    voteUp(id: $id) {
      upvotes
    }
  }
`;

const VOTE_DOWN_MUTATION = gql`
  mutation voteDownAction($id: Int!) {
    voteDown(id: $id) {
      downvotes
    }
  }
`;

export default graphql(VOTE_UP_MUTATION, {
  name: 'voteUpAction'
})(
  graphql(VOTE_DOWN_MUTATION, {
    name: 'voteDownAction'
  })(FeedbackItem)
);
