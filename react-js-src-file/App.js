// App.js
import React from 'react';
import AppRouter from './Router'; // Make sure the path is correct

function App() {
  return (
    <div className="App">
      <AppRouter /> {/* Make sure you're rendering AppRouter */}
    </div>
  );
}

export default App;
