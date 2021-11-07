import React,{useState} from 'react'

import RestaurantNavbar from '../Components/Navbar/RestaurantNavbar';
import ImageGrid from '../Components/Restaurant/ImageGrid';
import RestaurantInfo from '../Components/Restaurant/RestaurantInfo';

function RestaurantLayout({children}) {
    const [restaurant, setRestaurant] = useState({
        images:[
        ],
        name:"The Indo-Asian Kitchen",
        cuisine:"North Indian, chinese, Kabab, Mughlai",
        address:"Karol Bagh, New Delhi",
        restaurantRating:"4.3",
        deliveryRating:"3.5",
    });
    return (
        <>
            <RestaurantNavbar/>
            <div className="container mx-auto px-4 lg:px-20 pb-10">
                <ImageGrid images={restaurant.images} />
                <RestaurantInfo name={restaurant?.name} restaurantRating={restaurant?.restaurantRating || 0} deliveryRating={restaurant?.deliveryRating || 0} cuisine={restaurant?.cuisine} address={restaurant?.address}/>
            </div>
           
            {children}
        </>
    )
}

export default RestaurantLayout;
