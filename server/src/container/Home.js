import React from 'react';
import Header from '../components/Header';
const Home = () => {
  return (
    <div>
      <Header />
      Home
      <br />
      <button onClick={() => console.log('home')}>button</button>
    </div>
  )
}

export default Home