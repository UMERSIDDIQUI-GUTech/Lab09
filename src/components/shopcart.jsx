import React from 'react'
import { useState } from 'react';

const Cart = () => {
    let [clothes, setClothes] = useState(0);
    let [shoes, setShoes] = useState(0);
    let [glasses, setGlasses] = useState(0);
    let [total, setTotal] = useState(0);
    const totall = ()=>{
      setTotal(total=(clothes*500) + (shoes*100) + (glasses*50));
    }
    const resetCart = () => {
        setClothes(0);
        setShoes(0);
        setGlasses(0);
        setTotal(0);
      };
    let clothesTotal = clothes*500; 
    let shoesTotal = shoes*100; 
    let glassesTotal = glasses*50; 
  return (
    <div>
      <h1>Cart</h1>
      <h5>
       Clothes(500$):{clothes} & Total={clothesTotal}$
      </h5>
      <h5>Shoes(100$):{shoes} & Total={shoesTotal}$</h5>
      <h5>Glasses(50$):{glasses} & Total={glassesTotal}$</h5>
      <h4>Total: {total} $ </h4>

      <button onClick={() => setClothes(clothes + 1)}>add clothes</button>
      <button onClick={() => setShoes(shoes + 1)}>add  Shoes</button>
      <button onClick={() => setGlasses(glasses + 1)}>add  Glasses</button>

      <button onClick={() => setClothes(clothes > 0 ? clothes - 1 : (clothes = 0))}>
        remove  Clothes
      </button>
      <button onClick={() => setShoes(shoes > 0 ? shoes - 1 : (shoes = 0))}>
        remove  Shoes
      </button>
      <button onClick={() => setGlasses(glasses > 0 ? glasses - 1 : (glasses = 0))}>
        remove Glasses
      </button>
      <button onClick={totall}$>total($)</button>
      <button onClick={resetCart}>Again Go Shopping!</button>
    </div>
  );
}
export default Cart;