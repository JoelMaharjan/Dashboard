import FeaturedInfo from "../../component/FeaturedInfo/FeaturedInfo";
import './home.css';
import CarChart from "../../component/Chart/CarChart";
import WidgetSm from "../../component/Widgets/WidgetSm";
import WidgetLg from "../../component/Widgets/WidgetLg";
import {useEffect, useState} from "react";
import { Navigate } from "react-router-dom";

function Home(){
    return(
        <div className="home">
            <FeaturedInfo /> 
            <CarChart />
            <div className="widgets">
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>
    )
}

export default Home;