import './App.css';
import HomeVideo from './components/HomeVideo/HomeVideo';
import MessageBar from './components/MessageBar/MessageBar';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <header className='nav-header'>
      <NavBar />
      </header>
      
      <MessageBar />
      <HomeVideo />
      
    </div>
  );
}

export default App;
