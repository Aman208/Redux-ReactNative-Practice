import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import {AppRegistry} from 'react-native'

import Profile from "./components/profile";
import Navbar from "./components/navbar";

import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";

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
            <Profile />
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


