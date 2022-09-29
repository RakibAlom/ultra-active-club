// import logo from './logo.svg';
import './App.css';
import Exercises from './components/Exercises/Exercises';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div>
      <div className='d-md-none p-3'>
        <Header></Header>
      </div>
      <div className="row m-0 flex-column-reverse flex-md-row">
        <div className='col-lg-9 col-md-8 p-md-3 p-lg-5'>
          <Exercises></Exercises>
        </div>
        <div className='col-lg-3 col-md-4 my-4 my-md-0'>
          <Sidebar></Sidebar>
        </div>
      </div>
    </div>
  );
}

export default App;
