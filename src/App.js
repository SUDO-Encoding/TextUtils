import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#325559';
      document.body.style.color = '#ffffff';
      showAlert("Dark mode has been enabled", "success");
      // document.title="TextUtil-Home-Dark Mode"
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = '#ffffff';
      document.body.style.color = 'black';
      showAlert("Light mode has been enabled", "success");
      // document.title="TextUtil-Home-Light Mode";
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtilits" aboutText="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/" element={<TextForm heading="Enter your text to analyze below" mode={mode} showAlert={showAlert} />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
