import React from "react";
import {TouchableOpacity,Text} from "react-native";
import styles from "./styles";

const Button:React.FC<{title: string, color: string, backgroundColor: string}> = ({title,color,backgroundColor}) => {
    return(
        <TouchableOpacity style={[styles.button,{backgroundColor}]}>
            <Text style={{color}}>{title.toUpperCase()}</Text>
        </TouchableOpacity>
    )
}

export default Button;