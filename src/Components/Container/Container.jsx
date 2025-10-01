import React, { Children } from 'react';

const Container = ({children}) => {
    return (
        <div className='w-11/12 mx-auto mt-5 mb-5'>
            {children}
        </div>
    );
};

export default Container;