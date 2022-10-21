import React, { useState } from 'react';
import Login from '../Components/Login';



export default function Start(props: any) {
    let [mediaQuery, setMediaQuery] = useState(window.matchMedia('(min-width:800px)').matches)
    
    window.addEventListener('resize', () => {
        setMediaQuery(window.matchMedia('(min-width:800px)').matches);
    });

    return (
        <div className='start'>
            {mediaQuery ? 
            <div className='start__leftBanner'>
                
            </div>: null}
            <div className='start__rightBanner'>
                <Login changeContainer={props.changeContainer} setLoggedUser={props.setLoggedUser}/>
            </div>
        </div>
    );
}
