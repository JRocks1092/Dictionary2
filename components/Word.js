import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';

export default class Word extends React.Component{
render(){
  return(
<View>
<TouchableOpacity onPress = { ()=> {
 this.playSound(this.props.items),
 this.changevisited()}
 }
  style = {[ styles.button, { backgroundColor:"#661111" }]} >
  <Text style = {[ styles.text, { color:"white" }]}>{this.props.text}</Text></TouchableOpacity>
     
</View>
 )
}

}

const styles = StyleSheet.create({

text:{

textAlign:"center",
fontFamily:"cursive",
color:"#661111",

},

button:{

marginTop:50,
alignSelf:"center",
backgroundColor:"#661111",
width:100,
height:30,
borderRadius:50,
justifyContent:"center"

}

})