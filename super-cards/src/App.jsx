import React from "react";
import Header from './components/header/Header.jsx';
import './App.css';
import CardList from './components/cardList/CardList.jsx';
import CardItem from './components/cardItem/CardItem.jsx';


function App() {
  return (
    <div className="App">
      <Header />
      <CardList />
      <CardItem />
      </div>
  );
}

export default App;
