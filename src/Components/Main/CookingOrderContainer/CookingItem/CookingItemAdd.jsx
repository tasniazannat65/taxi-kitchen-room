import React from 'react';

const CookingItemAdd = ({order, handleCooking}) => {
    return (
    <div
      className="rounded-xl p-5 shadow hover:shadow-lg"
      style={{
        background: "linear-gradient(#ffffff40, #FCB700), url('/cook-bg.gif')",
      }}
    >
      {/* Title */}
      <h3 className="text-xl font-bold text-primary mb-2">
        {order.order_title}
      </h3>

      {/* Quantity */}
      <p className="text-lg font-semibold">
        Quantity: <span className="text-gray-700">{order.quantity}</span>
      </p>

      {/* Special Instruction */}
      <p className="text-xs text-gray-600 mt-2 italic">
        {order.special_instruction}
      </p>

      {/* Static Button */}
     
         <button onClick={()=>handleCooking(order)} className="px-6 mt-3 py-1 shadow text-sm hover:bg-black hover:text-white bg-white cursor-pointer rounded-xl">
        Cooked?
      </button>
     
    </div>
    );
};

export default CookingItemAdd;