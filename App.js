/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';

import {
  SafeAreaView,
  Text,
  

} from 'react-native';


import firestore from "@react-native-firebase/firestore";



const App = () => {
 useEffect(()=>{
       async function data(){
        //  await firestore().collection("user").doc("userName").set({name:"aravinth"});
        //  await firestore().collection("user").doc("userName").update({name:"mugilan"});
        //  console.log("Hello");
       }
       data();
 },[])

  return (
    <SafeAreaView >
     <Text>Hello</Text>
    </SafeAreaView>
  );
};



export default App;
