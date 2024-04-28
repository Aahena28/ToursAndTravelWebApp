import React from "react";
import ServiceCard from "./ServiceCard";
import{ Col } from "reactstrap";

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData =[
    { 
    imgUrl: weatherImg,
    title:"Calculate Weather",
    desc: "Plan your activities with confidence, knowing what to expect weather-wise during your trip..",
    },
    { 
    imgUrl: guideImg,
    title:"Best Tour Guide",
    desc: "Discover the best tour guides for your adventures. Our platform connects you with knowledgeable guides who can provide insights and recommendations to make your trip unforgettable.",
    },
    { 
    imgUrl: customizationImg,
    title:"Customization",
    desc: "Tailor your travel experience to your preferences with our customization options. Whether you prefer adventurous excursions or cultural exploration, we can help you create a personalized itinerary.",
    },
];


const ServiceList = () =>{
    return(
        <>
        {
            servicesData.map((item,index) =>(
                <Col lg= '3' key= {index}>
                    <ServiceCard item={item}/>
                </Col>
            ))}
        </>
    );
};

export default ServiceList;