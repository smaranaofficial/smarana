import React, { useState } from 'react';
import SplashScreen from './components/SplashScreen';
import Home from './pages/Home';

function App() {
  const [loading, setLoading] = useState(true);

  const handleSplashEnd = () => setLoading(false);

  return (
    <div className="App">
      {loading ? <SplashScreen onFinish={handleSplashEnd} /> : <Home />}
    </div>
  );
}

export default App;
