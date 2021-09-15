import React from 'react';
import Todo from './components/Todo';

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text={"Basic React"} />
      <Todo text="Min React" />
      <Todo text="Max React" />
    </div>
  );
}

export default App;