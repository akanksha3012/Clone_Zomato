import React,{useEffect} from 'react';
import FoodTab from '../Components/FoodTabs';

//components
import Navbar from "../Components/Navbar";

import {useDispatch} from "react-redux";
import {gerCart, getCart} from "../Redux/Reducer/Cart/cart.action";

function HomeLayout({children}) {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCart());
    },[]);
    
    return (
        <div>
            <Navbar/>  
            <FoodTab/>
            <div className="container mx-auto px-4 lg:px-20">{children}</div>  
        </div>
    )
}

export default HomeLayout;
