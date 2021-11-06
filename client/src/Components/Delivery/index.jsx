import React,{useState} from 'react'
import RestaurantCard from '../RestaurantCard'
import DeliveryCarousel from './DeliveryCarousel'

function Delivery() {
    const [restaurantList, setRestaurantList] = useState([
        {
            id:"123456",
            photos:[
                "https://b.zmtcdn.com/data/pictures/5/18826685/b364c06d4b404d763344520788cb4f3e_o2_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
            ],
            name:"Bakehouse Comfort",
            cuisine:["Bakery", "Desserts", "fast Food"],
            isPro:false,
            isOff:true,
            durationOfDelivery:47,
            restaurantReviewValue:4.1,
        },
        {
            id:"123486",
            photos:[
                "https://b.zmtcdn.com/data/pictures/5/18826685/b364c06d4b404d763344520788cb4f3e_o2_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
            ],
            name:"Bakehouse Comfort",
            cuisine:["Bakery", "Desserts", "fast Food"],
            isPro:false,
            isOff:true,
            durationOfDelivery:47,
            restaurantReviewValue:4.1,
        },
        {
            id:"123476",
            photos:[
                "https://b.zmtcdn.com/data/pictures/5/18826685/b364c06d4b404d763344520788cb4f3e_o2_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
            ],
            name:"Bakehouse Comfort",
            cuisine:["Bakery", "Desserts", "fast Food"],
            isPro:false,
            isOff:true,
            durationOfDelivery:47,
            restaurantReviewValue:4.1,
        }
    ]);
    return (
        <>
            <DeliveryCarousel/>
            <div className="flex justify-between flex-wrap my-10">
                {restaurantList.map((restaurant, index) => (
                    <RestaurantCard {...restaurant} key={restaurant._id} />
                ))}
            </div>
        </>
    )
}

export default Delivery;
