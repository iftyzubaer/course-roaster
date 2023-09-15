import Header from './Components/Header/Header'
import Courses from './Components/Courses/Courses'
import Carts from './Components/Carts/Carts'

function App() {
  return (
    <>
      <Header></Header>

      <main className='md:flex'>
        <Courses></Courses>
        <Carts></Carts>
      </main>
    </>
  )
}

export default App
