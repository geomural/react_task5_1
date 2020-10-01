import React from 'react';
import './App.css';
import Card from './components/Card'

function App() {
  return (
    <div className="App">
      <Card header="Card title" imgSrc="https://u.netology.ngcdn.ru/backend/uploads/showcase/cards/image_file/321/Mask_Group.png">
        <p className="card-text"> Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </Card>
      <Card header="Special title treatment">
        <p className="card-text"> With supporting text below as a natural lead-in to additional content. </p>
      </Card>
    </div>
  );
}

export default App;
