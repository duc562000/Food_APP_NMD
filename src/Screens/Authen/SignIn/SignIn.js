import React from "react";
import { useNavigation } from "@react-navigation/native";
import SignInView from "./SignInView";
import { TABNAVIGATOR } from "../../../routers/ScreenNames";


const SignIn = (props) => {
    const navigate = useNavigation();
    const onSubmit = (data) => {
    navigate.navigate(TABNAVIGATOR);
    console.log(data);     
    };
    return(
        <SignInView
            onSubmit={onSubmit}
        />
    );
}

export default SignIn;