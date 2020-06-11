import React, { Component } from 'react';
import Header from './components/header';
import Headline from './components/headline';
import SharedButton from './components/button';
import ListItem from './components/listItem';
import { connect } from 'react-redux';
import { fetchPosts } from './actions';
import './app.scss';
import { render } from 'enzyme';

const user = [
  {
    fName: 'John',
    lName: 'Smith',
    age: 30,
    email: 'john@outlook.com',
    onlineStatus: true
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.fetchData = this.fetchData.bind(this);
  }

  fetchData() {
    this.props.fetchPosts();
  }

  render() {
    const { posts } = this.props;

    const configButton = {
      buttonText: 'Get posts',
      emitEvent: this.fetchData
    };

    return (
      <div className='App'>
        <Header />
        <section className='main'>
          <Headline
            header='Posts'
            desc='Click the button to render posts!'
            user={user}
          />
          <SharedButton {...configButton} />

          {posts.length > 0 && (
            <div>
              {posts.map((post) => {
                const { id, title, body } = post;
                const configListItem = {
                  title,
                  desc: body
                };
                return <ListItem key={id} {...configListItem} />;
              })}
            </div>
          )}
        </section>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    posts: state.posts
  };
};

export default connect(mapStateToProps, { fetchPosts })(App);
