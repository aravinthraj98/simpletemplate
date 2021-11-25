/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';

import {SafeAreaView, Text} from 'react-native';

import firestore from '@react-native-firebase/firestore';

const App = () => {
  useEffect(() => {
    async function data() {
      // await firestore()
      //   .collection('user')
      //   .doc('userName')
      //   .set({name: 'aravinth', age: 22}); // replace
      // await firestore()
      //   .collection('user')
      //   .doc('userName')
      //   .update({name: 'mugilan'});//update field
      // await firestore()
      //   .collection('user')
      //   .get()
      //   .then(snap => {
      //     snap.forEach(doc => console.log(doc.id + ' ' + doc.data().name));
      //   }); //get

      //  await firestore().collection("user").doc("userName").delete();//delete

      //  console.log("Hello");
      let data = new Date();
      data.setDate(new Date(data) + 1);
    }
    data();
  }, []);

  return (
    <SafeAreaView>
      <Text>Hello</Text>
    </SafeAreaView>
  );
};

export default App;
