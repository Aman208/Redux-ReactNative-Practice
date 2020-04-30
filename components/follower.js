import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity , FlatList } from "react-native";
import { ListItem , Icon } from "react-native-elements";

import { connect } from "react-redux";

class Follower extends Component {
    keyExtractor = (item, index) => index.toString();

    renderItem = ({ item }) => (
        <ListItem
          title={item.name}
          subtitle={item.subtitle}
          leftAvatar={{ source: { uri: item.avatar_url } }}
          bottomDivider
          chevron
          rightTitle={"Follow"}
          rightIcon = { <Icon
            name='sc-telegram'
            type='evilicon'
            color='#517fa4'
          />}
        />
      );
      

  render() {
     
    return (
      <View>
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.props.followerData}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}



var mapStatetoProps = (state) => {
    return {
      followerData: state.fol.follower,
      count  : state.fol.count ,
    };
  };


export default connect(mapStatetoProps)(Follower);
