import logo from './logo.svg';
import './App.css';

function Heading() { 
  return ( 
    <h1>This is my First React App.</h1> 
  ) 
} 
 
function App() { 
  return ( 
    <div className="App"> 
      Welcome to my first React App, looking forward to doing many more great things 
      <Heading /> 
    </div> 
  ); 
} 
 
export default App;
