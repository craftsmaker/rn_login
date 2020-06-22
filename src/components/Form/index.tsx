import React from "react";
import {Text} from "react-native";
import colors from "../../styles/colors";

const Form: React.FC<{title: string,message: string}> = ({children,title,message}) => {
    return(
        <>
            <Text style={{color:"#333",fontSize: 30,fontWeight: "bold"}}>{title}</Text>
            <Text style={{color: colors.fadingColor}}>{message}</Text>
            {children}
        </>
    )
}

export default Form;