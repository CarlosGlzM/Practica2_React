import React from "react";
import {StyleSheet, TextInput, View} from "react-native";
import colors from "../utils/colors";
import App from "../../App";

export default function Resultados(props){

    const {suma, resta, div, multi} = props;

    console.log(props);

    return(
        <View style={styles.viewForm}>
            <View style={styles.viewInputs}>
                <Text style = {styles.input}>{App.suma}</Text>
                <Text style = {styles.input}>{App.resta}</Text>
                <Text style = {styles.input}>{App.div}</Text>
                <Text style = {styles.input}>{App.multi}</Text>
            </View>
        </View>

    )

}

const styles = StyleSheet.create({
    viewForm:{
        position: "absolute",
        bottom: 10,
        width: "85%",
        paddingHorizontal:50,
        backgroundColor: colors.PRIMARY_COLOR_DARK,
        borderRadius:30,
        height:180,
        justifyContent:"center"
    },
    viewInputs:{
        flexDirection:'row',

    },
    input:{
        height:50,
        backgroundColor: "#fff",
        borderWidth:1,
        borderColor: colors.PRIMARY_COLOR,
        borderRadius:5,
        width:"35%",
        marginRight:5,
        marginLeft:-5,
        marginBottom:10,
        paddingHorizontal:20,
        color: "#000"

    },
    input2:{
        height:50,
        backgroundColor: "#fff",
        borderWidth:1,
        borderColor: colors.PRIMARY_COLOR,
        borderRadius:5,
        width:"50%",
        marginRight:5,
        marginLeft:-5,
        marginBottom:10,
        paddingHorizontal:20,
        color: "#000"
    }


})