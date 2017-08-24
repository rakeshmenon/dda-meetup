import React from 'react';
import FeedbackItem from './FeedbackItem';
import { graphql, gql } from 'react-apollo';

class FeedbackList extends React.Component {
  componentWillMount() {
    this.props.data.subscribeToMore({
      document: feedbackSubscription,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) {
          return prev;
        }

        const newFeedback = subscriptionData.data.feedbackAdded;

        return Object.assign({}, prev, {
          feedbackList: [newFeedback, ...prev.feedbackList]
        });
      }
    });
  }

  handleAction = async (id, action) => {
    await action({
      variables: {
        id
      }
    });

    this.refetchList();
  };

  refetchList = () => {
    this.props.data.refetch();
  };

  render() {
    if (this.props.data.loading) {
      return <p>Loading...</p>;
    }

    return (
      <section>
        <ul>
          {this.props.data.feedbackList.map(feedback => {
            return (
              <FeedbackItem
                key={feedback.id}
                details={feedback}
                handleAction={this.handleAction}
              />
            );
          })}
        </ul>
      </section>
    );
  }
}

const ALL_FEEDBACKS_QUERY = gql`
  query AllFeedbacksQuery {
    feedbackList {
      id
      description
      from
      upvotes
      downvotes
    }
  }
`;

const feedbackSubscription = gql`
  subscription feedbackAdded {
    feedbackAdded {
      id
      description
      from
      upvotes
      downvotes
    }
  }
`;

export default graphql(ALL_FEEDBACKS_QUERY)(FeedbackList);
