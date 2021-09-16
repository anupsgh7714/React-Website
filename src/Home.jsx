import React from 'react';
import Comman from './Common';
import web from './images/img.jpeg'

const Home = () => {
    return(
        <>
            <Comman
                name = 'Grow your business with'
                visit = '/service'
                img = {web}
                btn = 'Get Started'
             />
        </>
    )
}

export default Home;