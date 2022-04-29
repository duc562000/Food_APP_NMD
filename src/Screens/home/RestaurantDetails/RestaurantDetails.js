import React,{useState} from "react";
import { useNavigation } from "@react-navigation/native";
import RestaurantDetailsView from "./RestaurantDetailView";
import { TABNAVIGATOR } from "../../../routers/ScreenNames";

const RestaurantDetails = (props) => {
    const navigate = useNavigation();
      const onSubmit = (data) => {
      navigate.navigate(TABNAVIGATOR);
      
      console.log(data);     
      };
      const [reaction,setReaction] = useState(false)
      
    return(
        <RestaurantDetailsView
            reaction={reaction}
            setReaction={setReaction}
            dataRestaurant = {props.route.params.item}
        />
    );
}

export default RestaurantDetails;