import React from 'react';
import Todo from './components/Todo';

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text='Basic Task' />
      <Todo text='Semi Basic Task' />
      <Todo text='Complex Task' />      
    </div>
  );
}

export default App;