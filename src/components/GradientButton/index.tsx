import React from "react";
import {Text} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import style from "../../styles/colors";

const GradientButton: React.FC<{title: string}> = ({title}) => {
    return(
        <LinearGradient
            colors={[style.topGradientColor,style.bottomGradientColor]} 
            style={{flexGrow:0,backgroundColor: "purple",height: 70,justifyContent: "center",borderRadius: 6}}
        >
            <Text style={{color: "white",textAlign: "center"}}>{title.toUpperCase()}</Text>
        </LinearGradient>
    )
}

export default GradientButton;