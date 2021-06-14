import logo from './logo.svg';
// import './App.css';
import Reactrouter from './Components/Reactrouter';
import {BrowserRouter} from 'react-router-dom'


function App() {
  return (
   <>
   {/* <ToDo/> */}
   {/* <Card/> */}
   {/* <Dcard/> */}
   <BrowserRouter>
     <Reactrouter/>
     </BrowserRouter>
   </>
  );
}

export default App;
