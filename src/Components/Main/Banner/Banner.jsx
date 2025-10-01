import { CookingPot, ScrollText, TicketCheck } from 'lucide-react';
import React from 'react';
import Container from '../../Container/Container';

const Banner = ({ orderTotal, cookingTotal, serveTotal}) => {
    return (
         <Container>
             <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
    
               <div className="border-4 border-dotted rounded-2xl border-amber-400 p-5">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <ScrollText className="animate-pulse" color="#fcb700" size={100} />
        <div className="text-xl text-center">
          Current Orders
          <h2 className="text-6xl font-bold">{orderTotal}</h2>
        </div>
      </div>
    </div>
             <div className="border-4 border-dotted rounded-2xl border-amber-400 p-5">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <CookingPot className="animate-pulse" color="#fcb700" size={100} />
        <div className="text-xl text-center">
          Current Cooking
          <h2 className="text-6xl font-bold">{cookingTotal}</h2>
        </div>
      </div>
    </div>
             <div className="border-4 border-dotted rounded-2xl border-amber-400 p-5">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <TicketCheck className="animate-pulse" color="#fcb700" size={100} />
        <div className="text-xl text-center">
          Ready to Serve
          <h2 className="text-6xl font-bold">{serveTotal}</h2>
        </div>
      </div>
    </div>
      
        </div>

         </Container>
       
        
    );
};

export default Banner;