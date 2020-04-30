import React, { Component } from "react";
import { StyleSheet,  View } from "react-native";
import {AppRegistry} from 'react-native'

import ProfileHeader from "./components/profileHeader";
import Navbar from "./components/navbar";

import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";

import imageReducer from "./store/reducer/image";
import folllowerReducer from "./store/reducer/follower";

const rootReducer = combineReducers({
  img: imageReducer,
  fol: folllowerReducer,
});

const store = createStore(rootReducer);

export default class App extends Component {


    render(){
      return (
        <Provider store={store}>
        <View style={styles.container}>
          <View style={{ flex: 3 }}>
            <ProfileHeader />
          </View>
          <View style={{ flex: 8 }}>
            <Navbar />
          </View>
        </View>
        </Provider>
      );
    }
}

AppRegistry.registerComponent('App', () => App)

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#fff",
    marginTop: 30,
    // alignItems: 'center',
    justifyContent: "center",
  },
});


