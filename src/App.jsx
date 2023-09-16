import Header from './Components/Header/Header'
import Courses from './Components/Courses/Courses'
import Carts from './Components/Carts/Carts'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [carts, setCarts] = useState([]);
  const [addedTotalCredit, setAddedTotalCredit] = useState(0);
  const [addedTotalRemaining, setAddedTotalRemaining] = useState(0);
  const [addedTotalPrice, setAddedTotalPrice] = useState(0);

  const AddToCart = (course) => {
    const isExist = carts.find((item) => item.id === course.id);
    let count = course.credit;
    let price = course.price;
    if (isExist) {
      toast("Cannot choose the same course again!");
    }
    else {
      carts.forEach(item => {
        count=count+item.credit;
        price = price + item.price;
      })
      const totalCredit = count;
      const totalPrice = price;
      const totalRemaining = 20 - totalCredit;
      
      if(totalCredit > 20) {
        toast("Cannot get more than 20 credits!");
      }
      else {
        setAddedTotalPrice(totalPrice)
        setAddedTotalCredit(totalCredit)
        setAddedTotalRemaining(totalRemaining)
        setCarts([...carts, course]);
      }
    }    
  }

  return (
    <>
      <Header></Header>

      <main className='md:flex px-14 gap-6'>
        <Courses AddToCart={AddToCart}></Courses>
        <Carts carts={carts} addedTotalRemaining={addedTotalRemaining} addedTotalCredit={addedTotalCredit} addedTotalPrice={addedTotalPrice}></Carts>
      </main>
      <ToastContainer />
    </>
  )
}

export default App
