import logo from './instacopy.webp';
import camera from './camera-icon.png'
import './App.css';
import Postview from './Components/postview';
import data from './Mock-data/data.json'



function App() {
  //console.log(data.user)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={camera} className="camera-logo" alt="logo" />
      </header>
      <div className='posts'>
      {data.user.map((details,index)=>{
        return(
          <Postview post={details} key={index}></Postview>
        );
      })}
      </div>
      
    </div>
  );
}

export default App;
