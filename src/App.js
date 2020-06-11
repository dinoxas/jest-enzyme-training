import React from 'react';
import Header from './components/header';
import Headline from './components/headline';
import './app.scss';

const user = [
  {
    fName: 'John',
    lName: 'Smith',
    age: 30,
    email: 'john@outlook.com',
    onlineStatus: true
  }
];

function App() {
  return (
    <div className='App'>
      <Header />
      <section className='main'>
        <Headline
          header='Posts'
          desc='Click the button to render posts!'
          user={user}
        />
      </section>
    </div>
  );
}

export default App;
