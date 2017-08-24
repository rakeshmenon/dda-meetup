import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import FeedbackList from './FeedbackList';
import FeedbackForm from './FeedbackForm';

class App extends Component {
  render() {
    return (
      <main className="App">
        <h1>DDA Meetup Feedback</h1>
        <Switch>
          <Route exact path="/" component={FeedbackList} />
          <Route exact path="/submit" component={FeedbackForm} />
        </Switch>
      </main>
    );
  }
}

export default App;
