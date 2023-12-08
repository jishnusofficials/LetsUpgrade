
import './App.css';
import Header from './components/Header';
import Products from './components/ProductsList';

function App() {
  return (
    <div className="App">
      <h1>Welcome Everyone</h1>
      <Header></Header>
      <Products></Products>
      {/* <button className='btn' onClick={doSomething}>Click</button> */}
     {/*  <button className='btn' onClick={()=>{doSomething("Jishnu")}}>Click</button> */}
    </div>
  );
}

export default App;
