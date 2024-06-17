import './App.css';
import React from 'react';
import InputTodos from './components/InputTodos';
import ListTodos from './components/ListTodos';

function App() {
  return (
    <div className="App">
      <InputTodos />
      <ListTodos />
    </div>
  );
}

export default App;
