import React from 'react';
import './App.css';
import Card from './components/Card'

function App() {
  return (
    <div className="App">
      <Card header="Card title" info="Some quick example text to build on the card title and make up the bulk of the card's content." btnText="Go somewhere">
        <img src="https://u.netology.ngcdn.ru/backend/uploads/showcase/cards/image_file/321/Mask_Group.png" className="card-img-top" alt="" />
      </Card>
      <Card header="Special title treatment" info="With supporting text below as a natural lead-in to additional content." btnText="Go somewhere"></Card>
    </div>
  );
}

export default App;
