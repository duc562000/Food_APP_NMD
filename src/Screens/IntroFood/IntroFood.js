import React from "react";
import R from "../../assets/R";
import { LOGINSCREEN } from "../../routers/ScreenNames";
import IntroFoodView from "./IntroFoodView";
import { useNavigation } from "@react-navigation/native";

const IntroFood = (props) => {
    const IntroData = [
        {
            id:1,
            title: "Delicious Food",
            description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
            img:R.images.iconTurkeyChicken
        },
        {
            id:2,
            title: "Fast Shipping",
            description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
            img: R.images.iconTruck
        },
        {
            id:3,
            title: "Certificate Food",
            description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
            img: R.images.iconAward
        },
        {
            id:4,
            title: "Payment Online",
            description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
            img: R.images.iconCreditCard
        }
    ];
    const navigate = useNavigation();
    const handleLet = () => {
        navigate.navigate(LOGINSCREEN)
    }

    return(
        <IntroFoodView
            handleLet={handleLet}
            data={IntroData}
        />
    );
}


export default IntroFood;