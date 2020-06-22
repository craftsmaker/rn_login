import React from "react";
import {Text} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import style from "../../styles/colors";

const GradientButton: React.FC<{title: string}> = ({title}) => {
    return(
        <LinearGradient
            colors={[style.topGradientColor,style.bottomGradientColor]} 
            style={{flexGrow:0,backgroundColor: "purple",height: "60%", maxHeight: 100,justifyContent: "center"}}
        >
            <Text style={{color: "white",textAlign: "center"}}>{title}</Text>
        </LinearGradient>
    )
}

export default GradientButton;