import React from "react";
import Header from './components/header/Header.jsx';
import './App.css';
import CardList from './components/cardList/CardList.jsx';


function App() {
  return (
    <div className="App">
      <Header />
      <CardList />
      <cardItem />
    </div>
  );
}

export default App;
