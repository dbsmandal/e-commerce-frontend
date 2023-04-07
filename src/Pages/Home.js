import React from 'react'
import Anousment from '../Components/Anousment';
import Categories from '../Components/Categories';
import NewsLetter from '../Components/NewsLetter';
import Navbar from '../Components/Navbar';
import Products from '../Components/Products';
import Slider from '../Components/Slider';
import Footer from '../Components/Footer';




const Home = () => {
    return (
        <div>
            <Anousment/>
            <Navbar />
            <Slider/>
            <Categories/>
            <Products/>
            <NewsLetter/>
            <Footer/>
        </div>
    )
}

export default Home
