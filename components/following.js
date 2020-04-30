import React, { Component } from 'react';
import {  View  , FlatList}  from "react-native";
import { ListItem , Icon } from "react-native-elements";
import { connect } from "react-redux";



class Following extends Component {
    keyExtractor = (item, index) => index.toString();

    renderItem = ({ item , index }) => (
        <ListItem
          title={item.name}
          subtitle={item.subtitle}
          leftAvatar={{ source: { uri: item.avatar_url } }}
          bottomDivider
          onPress={()=> this.props.onUnFollowUser(item.id)}
          chevron
          rightTitle={"UnFollow"}
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
          data={this.props.followingData}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

var mapStatetoProps = (state) => {
  return {
    followingData: state.fol.following,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    onUnFollowUser: (index) => dispatch({ type: "UNFOLLOW" , userid : index  }),
  };
} 


export default connect(mapStatetoProps , mapDispatchToProps)(Following);