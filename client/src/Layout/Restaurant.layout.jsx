//libraries
import React,{useState} from 'react'
//components
import RestaurantNavbar from '../Components/Navbar/RestaurantNavbar';
import ImageGrid from '../Components/Restaurant/ImageGrid';
import InfoButtons from '../Components/Restaurant/InfoButtons';
import RestaurantInfo from '../Components/Restaurant/RestaurantInfo';

import { TiStarOutline } from 'react-icons/ti';
import { RiDirectionLine, RiShareForwardLine } from 'react-icons/ri';
import { BiBookmarkPlus } from 'react-icons/bi';
import Tabs from '../Components/Restaurant/Tabs';
import CartContainer from '../Components/Cart/CartContainer';

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
                
            <div className="my-4 flex flex-wrap gap-3">
                <InfoButtons isActive>
                    <TiStarOutline/> Add Review
                </InfoButtons>
                <InfoButtons><RiDirectionLine/>Direction</InfoButtons>
                <InfoButtons><BiBookmarkPlus/>Bookmark</InfoButtons>
                <InfoButtons><RiShareForwardLine/>Share</InfoButtons>
            </div>
            <div className="my-10">
                <Tabs/>
            </div>
            {children}
            </div>
            <CartContainer/>
        </>
    )
}

export default RestaurantLayout;
