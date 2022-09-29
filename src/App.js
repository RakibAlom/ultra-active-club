// import logo from './logo.svg';
import './App.css';
import Exercises from './components/Exercises/Exercises';
import Header from './components/Header/Header';

function App() {
  return (
    <div>
      <div className='d-md-none p-3'>
        <Header></Header>
      </div>
      <Exercises></Exercises>
    </div>
  );
}

export default App;
