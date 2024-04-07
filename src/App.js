import './App.css';
import {
  Route,
  Routes
} from "react-router-dom"
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import CreateProfilePage from './components/CreateProfilePage';
import CreateProfilePage2 from './components/CreateProfilePage2';
import Home from './components/Home';


function App() {
  return (
    <>
     <Routes>
          <Route exact path='/' element={<SignUp/>}></Route>
          <Route exact path='/SignIn' element={<SignIn/>}></Route>
          <Route exact path='/createProfile' element={<CreateProfilePage/>} ></Route>
          <Route exact path='/createProfile2' element={<CreateProfilePage2/>} ></Route>
          <Route exact path='/home' element={<Home/>}></Route>
      </Routes>
    </>
  );
}

export default App;
