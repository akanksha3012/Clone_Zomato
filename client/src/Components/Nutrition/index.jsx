import React from 'react';
import NutritionCarausel from './NutritionCarausel';
import NutritionCard from './NutritionCard';

//components
import NutritionHeroCarausel from "./NutritionHeroCarausel";

function Nutrition() {
    return (
        <div style={{paddingBottom: "66px"}}>
            <NutritionHeroCarausel/>
            <div className="my-6">
                <NutritionCarausel/>
            </div>
            <div className="flex flex-wrap">
                <NutritionCard bg='red' image='https://dote.zmtcdn.com/prod/data/admin_assets/images/985/1db983abf8a38bdebb42171b5ea7d985_1614756360.png?output-format=webp'/>
                <NutritionCard bg='red' image='https://dote.zmtcdn.com/prod/data/admin_assets/images/985/1db983abf8a38bdebb42171b5ea7d985_1614756360.png?output-format=webp'/>
                <NutritionCard bg='red' image='https://dote.zmtcdn.com/prod/data/admin_assets/images/985/1db983abf8a38bdebb42171b5ea7d985_1614756360.png?output-format=webp'/>
                <NutritionCard bg='red' image='https://dote.zmtcdn.com/prod/data/admin_assets/images/985/1db983abf8a38bdebb42171b5ea7d985_1614756360.png?output-format=webp'/>
                <NutritionCard bg='red' image='https://dote.zmtcdn.com/prod/data/admin_assets/images/985/1db983abf8a38bdebb42171b5ea7d985_1614756360.png?output-format=webp'/>
            </div>
        </div>
    )
}

export default Nutrition;
