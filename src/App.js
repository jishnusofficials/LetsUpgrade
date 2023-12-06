
import './App.css';
import Header from './components/Header';
import Products from './components/ProductsList';

function App() {
  function doSomething(data)
  {
    console.log("Hello! I am Clicked"+data);
  }
  return (
    <div className="App">
      <h1>Welcome Everyone</h1>
      <Header></Header>
      <Products></Products>
      {/* <button className='btn' onClick={doSomething}>Click</button> */}
      <button className='btn' onClick={()=>{doSomething("Jishnu")}}>Click</button>
    </div>
  );
}

export default App;
