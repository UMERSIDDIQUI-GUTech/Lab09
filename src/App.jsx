import './App.css';
import Counter from './components/counter'; 

import Calculator from './components/calculator';

import Form from './components/form';

import Shopcart from './components/shopcart';



function App() {
  return (
    <div className="App">
      <Calculator/>

      <Counter/>

      <Form/>
      <Shopcart/>

    </div>
  );
}

export default App;