  import { ToastContainer } from 'react-toastify';
import './App.css'
import Navbar from './Components/Header/Navbar/Navbar';
import Heading from './Components/Header/Heading/Heading';
import { Suspense } from 'react';
import CookingOrderContainer from './Components/Main/CookingOrderContainer/CookingOrderContainer';
const cookingPromise = fetch('/orders.json')
.then(res=>res.json())


function App() {
  

  return (
    <>
    
       <header>
    
       <Navbar></Navbar>
         <section>
      <Heading>Kitchen Room</Heading>
     </section>
     </header>
     <main>
      
       
        <Suspense fallback={'loading..⏳'}>
          <CookingOrderContainer cookingPromise={cookingPromise}></CookingOrderContainer>
        </Suspense>
      
     </main>
    
    





     <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
      draggable
     pauseOnHover
      theme="colored"
      
        />












     
    </>
  )
}

export default App
