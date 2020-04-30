import React, { Component } from 'react';
import { StyleSheet, Text, View  , TouchableOpacity} from "react-native";
import ImageGallery from "./photo_gallery";

import Follower from "./follower";
import Following from "./following";

class Navbar extends Component {

    constructor() {
        super();
        this.state = { val :1 }
      }
    
    
    
  
        
    render() {
        let {val} = this.state;
        return (
            <View style={{flex:1}}>
                 <View style={{flexDirection : "row"}}>
        <TouchableOpacity style={styles.switchItem} onPress={() => this.setState({ val: 1 }) }  >
          <Text style= {styles.text}> 432</Text>
          <Text style= {styles.text}> Photos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.switchItem}  onPress={() => this.setState({ val: 2 }) } >
         <Text style= {styles.text}>  09</Text>
          <Text style= {styles.text}>Follower</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.switchItem}  onPress={() => this.setState({ val: 3 }) } >
        <Text style= {styles.text}> 03</Text>
          <Text style= {styles.text}>Following</Text>
        </TouchableOpacity>
      </View>
      
      
     {val==1 ? <ImageGallery /> : val==2 ? <Follower/> : <Following/> } 
            </View>
        );
    }
}

export default Navbar;


const styles = StyleSheet.create({
   
  
    switchItem : {
      flex:1 ,
      flexDirection : "column",
      justifyContent: "center",
      
      alignItems: 'center',
    } ,
    text:{
      fontWeight: 'bold' ,
      fontSize : 16 
    }
  
  });
  