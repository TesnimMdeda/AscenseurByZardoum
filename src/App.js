import React from 'react';
import './App.css';

function App() {
  return (
    <section className="container">
      <img src="/logo.png" alt="Logo" className="logo" /> 
      <video autoPlay muted loop className="video-background">
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="clock_content">
        <h1>Coming Soon</h1>
        <h3>Stay tuned for something amazing.</h3>
      </div>
    </section>
  );
}

export default App;