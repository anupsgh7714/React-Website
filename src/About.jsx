import React from 'react';
import Comman from './Common';
import web from './images/img3.webp'

const Home = () => {
    return(
        <>
            <Comman
                name = 'Welcome to'
                visit = '/'
                img = {web}
                btn = 'Home'
             />
        </>
    )
}

export default Home;