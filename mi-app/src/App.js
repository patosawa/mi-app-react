import ItemListContainer  from './components/itemListContainer';
import Cart from './components/Cart';
import Header from './components/Header';
import datos from './datos';
import { useState } from 'react';
 

export default function App() { 
  const {productos} = datos;
  const [CartItems, setCartItems] = useState([]);
  const onAdd = (producto)=>{
    const exist = CartItems.find(x=>x.id===producto.id);
    if(exist){
      setCartItems(CartItems.map(x=>x.id===producto.id?{...exist,cantidad:exist.cantidad+1}:x));
    }else{
      setCartItems([...CartItems,{...producto,cantidad:1}]);

    }
  }
  const onRemove = (producto)=>{
    const exist = CartItems.find(x=>x.id===producto.id);
    if(exist.cantidad===1){
      setCartItems(CartItems.filter(x=>x.id!==producto.id));
      
    }else{
      setCartItems(CartItems.map(x=>x.id===producto.id?{...exist,cantidad:exist.cantidad-1}:x));
    }
  }

  return (
    <div className="App">
      <Header countCartItems={CartItems.length} />
      <div className='row'>
        <ItemListContainer onAdd={onAdd} productos={productos} />
        <Cart onAdd={onAdd}onRemove={onRemove} CartItems={CartItems} />
      </div>      
    </div>
  );
}
