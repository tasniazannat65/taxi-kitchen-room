import React, { use, useState } from 'react';
import CookingOrderCard from './CookingOrderCard';
import Banner from '../Banner/Banner';
import Container from '../../Container/Container';
import CookingItemAdd from './CookingItem/CookingItemAdd';
import CookingServe from './CookingServe/CookingServe';
import { toast } from 'react-toastify';


const CookingOrderContainer = ({cookingPromise}) => {
    const orderData = use(cookingPromise);
    
    const [cookingItem, setCookingItem] = useState([]);
    const [readyItem, setReadyItem] = useState([]);
    const [orders, setOrders] = useState(orderData)

    const handleOrders = (order)=>{
        const isExit = cookingItem.find(item=> item.id === order.id)
       
        if(isExit){
            toast.error('Order already on processing!!')
            return
        }
        
         
       setCookingItem([...cookingItem, order])

      
        
    }

    const handleCooking=(order)=>{
        order.cookedAt = new Date().toLocaleTimeString();
       setReadyItem([...readyItem, order])
       const remaining = cookingItem.filter(item=> item.id!== order.id);
       setCookingItem(remaining)
       if(cookingItem){
        toast.success('Order already served!!')
       }
      const remainingOrder = orders.filter((item)=> item.id !== order.id)
      setOrders(remainingOrder)

    }
   


    return (
        
        <div>
            <Banner orderTotal={orders.length}
            cookingTotal={cookingItem.length}
            serveTotal={readyItem.length}
            ></Banner>
          <Container>
              <section className='grid grid-cols-1 lg:grid-cols-12 gap-5'>

            <div className='col-span-1 lg:col-span-8'>
                <h2  className="font-bold text-3xl">Current Orders</h2>
             <div className='space-y-5'>
                   {
                    orders.map(order=> <CookingOrderCard key={order.id} order={order}
                        handleOrders={handleOrders}
                    
                    ></CookingOrderCard>)
                }
             </div>
            </div>
            <div className='col-span-1 lg:col-span-4 space-y-5'>
                <h2  className="font-bold text-3xl">Cooking</h2>
               <div className='shadow p-5 space-y-5'>
                {
                    cookingItem.map(order=> <CookingItemAdd key={order.id} order={order}
                        handleCooking={handleCooking}
                    
                    ></CookingItemAdd>)

                }
                 
                   
               </div>
                 <h2  className="font-bold text-3xl">Ready to Serve</h2>
               <div className='shadow p-5 space-y-5'>
                {
                    readyItem.map(order=> <CookingServe key={order.id} order={order}></CookingServe>)
                }
               </div>



            </div>
            </section>
          </Container>
             

        </div>
    );
};

export default CookingOrderContainer;