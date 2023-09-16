import Header from './Components/Header/Header'
import Courses from './Components/Courses/Courses'
import Carts from './Components/Carts/Carts'
import { useState } from 'react'

function App() {

  const [carts, setCarts] = useState([]);
  const [creditHour, setCreditHour] = useState(0);
  const [price, setPrice] = useState(0);

  const AddToCart = course => {
    const newCarts = [...carts, course];
    setCarts(newCarts);
  }
  const addCredit = time => {
    setCreditHour(creditHour + time);
  }
  const addPrice = newPrice => {
    setPrice(price+newPrice);
  }

  return (
    <>
      <Header></Header>

      <main className='md:flex px-14 gap-6'>
        <Courses AddToCart={AddToCart} addCredit={addCredit} addPrice={addPrice}></Courses>
        <Carts carts={carts} creditHour={creditHour} price={price}></Carts>
      </main>
    </>
  )
}

export default App
