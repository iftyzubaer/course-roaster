import Header from './Components/Header/Header'
import Courses from './Components/Courses/Courses'
import Carts from './Components/Carts/Carts'
import { useState } from 'react'

function App() {

  const [carts, setCarts] = useState([]);
  const AddToCart = course => {
    const newCarts = [...carts, course];
    setCarts(newCarts);
  }

  return (
    <>
      <Header></Header>

      <main className='md:flex px-14 gap-6'>
        <Courses AddToCart={AddToCart}></Courses>
        <Carts carts={carts}></Carts>
      </main>
    </>
  )
}

export default App
