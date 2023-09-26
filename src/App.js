import './App.css';
import {Route, Routes, Link} from 'react-router-dom';
import Home from './pages/Home';
import AddMeetings from './pages/AddMeetings';
import Navigation from './component/Navigation';

// import Btn from './component/Btn';
// import BtnOutline from './component/BtnOutline';



function App() {
  return (
    <div className="App">
      
      <Navigation/>    


      <Routes>
      
        <Route exact path ='/' element = {<Home/>} />
        <Route exact path ='/add' element = {<AddMeetings/>} />

      </Routes>



      {/* <Btn/> */}
      {/* <BtnOutline/> */}
      
      

    </div>
  );
}

export default App;
