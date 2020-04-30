import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity , FlatList } from "react-native";
import { ListItem , Icon } from "react-native-elements";

import { connect } from "react-redux";

class Follower extends Component {
    keyExtractor = (item, index) => index.toString();

    renderItem = ({ item , index }) => (
        <ListItem
         onPress = {() => {this.props.onFollowUser(index)}}
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

 function mapDispatchToProps(dispatch) {
  return {
    onFollowUser: (index) => dispatch({ type: "FOLLOW" , userid : index  }),
  };
} 


export default connect(mapStatetoProps , mapDispatchToProps)(Follower);
