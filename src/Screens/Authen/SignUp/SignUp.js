import React from "react";
import { useNavigation } from "@react-navigation/native";
import SignUpView from "./SignUpView";
import { SIGNINSCREEN } from "../../../routers/ScreenNames";

const SignUp = (props) => {
    const navigate = useNavigation();
    const onSubmit = (data) => {
        navigate.navigate(SIGNINSCREEN);
        console.log(data);
      };
    return(
        <SignUpView
            onSubmit={onSubmit}
        />
    );
}


export default SignUp;