import React, { Children } from 'react';

const Container = ({children}) => {
    return (
        <div className='w-11/12 mx-auto py-10'>
            {children}
        </div>
    );
};

export default Container;