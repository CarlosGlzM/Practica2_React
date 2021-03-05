import React,{useState} from "react";
import {StyleSheet,View,Text,SafeAreaView,StatusBar,Button} from "react-native"

import colors from './src/utils/colors'
import Form from './src/components/Form'
import Resultados from "./src/components/Resultados";

export default function App(props){
  const [num1,setNum1] = useState(null);
  const [num2,setNum2] = useState(null);
  const [suma,setSuma] = useState(null);
  const [resta,setResta] = useState(null);
  const [div,setDiv] = useState(null);
  const[multi,setMulti] = useState(null);

 


return(
<>

  <StatusBar barStyle="light-content"></StatusBar>

  <SafeAreaView style={styles.safeArea}>
    <Text style={styles.titleApp}>Titulo</Text>
    <Form setNum1 = {setNum1} setNum2 = {setNum2}/>
  </SafeAreaView>
  <View><Text>Encabezado</Text></View>
  <View><Text>Cuerpo</Text></View>
  <View><Text>Footer</Text></View>
  <View>
    <Button title="Enviar" onPress={()=>{
setSuma (parseInt(num1) + parseInt(num2)),
setResta (num1 - num2),
setDiv (num1 / num2),
setMulti (num1 * num2)
}}/>
   </View>

   <SafeAreaView style={styles.safeAreaR}>
     <Text style={styles.titleRes}>Resultado</Text>
     <Text style = {styles.input}>Suma: {suma}</Text>
     <Text style = {styles.input}>Resta: {resta}</Text>
     <Text style = {styles.input}>Division: {div}</Text>
     <Text style = {styles.input}>Multi: {multi}</Text>
   </SafeAreaView>
</>
);
}

const styles = StyleSheet.create({
  safeArea:{
    backgroundColor: colors.PRIMARY_COLOR,
    height:200,
    borderBottomLeftRadius:30,
    borderBottomRightRadius:30,
    alignItems:"center"
  },
  safeAreaR:{
    backgroundColor: colors.PRIMARY_COLOR,
    height:200,
    alignItems:"center"
  },
  titleRes:{
    fontSize:20,
    fontWeight:"100",
    color: '#000',
    textAlign:"center"


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
    color: "#000",
},
  titleApp:{
    fontSize:25,
    fontWeight:"bold",
    color: '#000',
    marginTop:15,

  }

})