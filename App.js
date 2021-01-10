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

const Key = "aslisubhash"


const App = () => {
  const [input, setInput] = useState("")
  const [details, setDetails] = useState(null)

  const fetchDetails = async () => {
    try {
     const {data} = await Axios.get(`https://api.github.com/users/${Key}`)
     const details = data;
     console.log(details);
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
         <Text>
           Loading....
         </Text>
       </View>
     )
   } 
   else {
    return (
      <View>
        <View>
          <User details={details}/>
          <Button
          rounded 
          style={styles.button}
          onPress={()=>fetchDetails()}
          >
            <Text>New User</Text>
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
    alignSelf:"center"

  }
})