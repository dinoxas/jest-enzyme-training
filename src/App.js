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

const initialState = {
  hideBtn: false
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState
    };
    this.fetchData = this.fetchData.bind(this);
  }

  updateState() {
    const { hideBtn } = this.state;
    this.setState({
      hideBtn: !hideBtn
    });
  }

  returnValue(num) {
    return num + 1;
  }

  fetchData() {
    this.props.fetchPosts();
    this.updateState();
  }

  render() {
    const { posts } = this.props;
    const { hideBtn } = this.state;

    const configButton = {
      buttonText: 'Get posts',
      emitEvent: this.fetchData
    };

    return (
      <div className='App' data-test='appComponent'>
        <Header />
        <section className='main'>
          <Headline
            header='Posts'
            desc='Click the button to render posts!'
            user={user}
          />

          {!hideBtn && <SharedButton {...configButton} />}

          {posts.length > 0 && (
            <div>
              {posts.map((post, index) => {
                const { title, body } = post;
                const configListItem = {
                  title,
                  desc: body
                };
                return <ListItem key={index} {...configListItem} />;
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
