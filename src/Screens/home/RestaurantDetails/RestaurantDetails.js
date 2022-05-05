import React,{useState} from "react";
import { useNavigation } from "@react-navigation/native";
import RestaurantDetailsView from "./RestaurantDetailView";
import { TABNAVIGATOR } from "../../../routers/ScreenNames";
import { toggleHeart } from "../../../actions/FavoritesAction";
import { connect } from "react-redux";

const RestaurantDetails = (props) => {
    const navigate = useNavigation();
    const favotiteList = props.FavoriteProduct.favotiteList
    const {toggleHeart} = props
    return(
        <RestaurantDetailsView
            dataRestaurant = {props.route.params.item}
            favotiteList={favotiteList}
            toggleHeart = {toggleHeart}
        />
    );
}

const mapStateToProps = (state) => {
    return {
        FavoriteProduct: state.FavoriteReducer,
    };
  };
  
  export default connect(mapStateToProps, {
    toggleHeart
  })(RestaurantDetails)