import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TextInput,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { Button } from "native-base";
import Axios from "axios";
import User from './components/User';




const App = () => {
  const [username, setUsername] = useState("")
  const [details, setDetails] = useState(null)
  console.log(username);

  const resetform = () =>(
    setDetails(""),
    setUsername("")
  )

  const fetchDetails = async () => {
    try {
     const {data} = await Axios.get(`https://api.github.com/users/${username}`)
     const details = data;
     console.log(data);
     setDetails(details)
     
    } catch (error) {
      console.log(error);
    }
  }
   useEffect(()=>{
     fetchDetails()
   },[])

   if (!details) {
     return (
       <View style={styles.container}>
          <View style={styles.inputContainer}>
        <TextInput
        value={(username).toString()}
        onChangeText={(username) =>
          setUsername(username)}
        style={styles.inputtext}
        placeholder="Username"
        />
      </View>
         <Button
          
          block
          onPress={()=>fetchDetails()}
          style={{width:"90%", alignSelf:"center", marginTop: 30}}
          >
            <Text
            style= {styles.text}
            >Find User</Text>
          </Button>
       </View>
     )
   } 
   else {
    return (
      <View style={styles.container}>
        <View>
          <User details={details}/>
          <Button block success
          style={styles.button}
          onPress={()=>resetform()}
          >
            <Text style={styles.text}>
              Find New User
            </Text>
          </Button>
        </View>
      </View>
    )}
   
    
}

export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems:"center",
    backgroundColor : "#222831"
  },
  button:{
    marginTop: 30,
    paddingHorizontal: 30,
    alignSelf:"center",
    

  },
  text: {
    color: '#FFF',
    fontSize: 25,
  
  },
  inputtext: {
    color: '#FFF',
    fontSize: 25,
    borderBottomWidth: 1,
    borderColor: "#FFF"
  
  }
})