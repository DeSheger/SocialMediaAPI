import React, { useState } from 'react';
import Login from '../components/Login';
import { Navigate } from 'react-router-dom';



export default function Start(props: any) {
    let [mediaQuery, setMediaQuery] = useState(window.matchMedia('(min-width:800px)').matches)
    
    window.addEventListener('resize', () => {
        setMediaQuery(window.matchMedia('(min-width:800px)').matches);
    });
    console.log(props.loggedUser)
    if(props.loggedUser.Id!=null)
    {
        return <Navigate to="/home"/>
    }
    return (
        <div className='start'>
            {mediaQuery ? 
            <div className='start__leftBanner'>
                
            </div>: null}
            <div className='start__rightBanner'>
                <Login />
            </div>
        </div>
    );
}
