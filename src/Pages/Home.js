import React from 'react'
import Anousment from '../Components/Anousment';
import Categories from '../Components/Categories';
import Navbar from '../Components/Navbar';
import Slider from '../Components/Slider';




const Home = () => {
    return (
        <div>
            <Anousment/>
            <Navbar />
            <Slider/>
            <Categories/>
        </div>
    )
}

export default Home
