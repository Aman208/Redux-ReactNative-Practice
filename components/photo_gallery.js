import React, { Component } from "react";
import {
  AppRegistry,
  TouchableOpacity,
  Image,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  View,
  Platform,
  Text,
} from "react-native";

import { connect } from "react-redux";

class ImageComponent extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <View style={styles.imageHolder}>
        <Image source={{ uri: this.props.imageURI }} style={styles.image} />
        <View style={styles.textViewHolder}>
          <Text numberOfLines={1} style={styles.textOnImage}>
            {this.props.name}
          </Text>
        </View>
      </View>
    );
  }
}

class ImageGallery extends Component {
  constructor() {
    super();
    this.state = { gridView: true, btnText: "Show List" };
  }

  changeView = () => {
    this.setState({ gridView: !this.state.gridView }, () => {
      if (this.state.gridView) {
        this.setState({ btnText: "Show List" });
      } else {
        this.setState({ btnText: "Show Grid" });
      }
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.buttonDesign}
            onPress={this.changeView}
          >
            <Text style={styles.buttonText}>{this.state.btnText}</Text>
          </TouchableOpacity>

          <FlatList
            keyExtractor={(item) => item.id}
            key={this.state.gridView ? 1 : 0}
            numColumns={this.state.gridView ? 2 : 1}
            data={this.props.imagesData}
            renderItem={({ item }) => (
              <ImageComponent
                imageURI={item.download_url}
                name={item.author.toUpperCase()}
              />
            )}
          />
        </View>
      </View>
    );
  }
}

var mapStatetoProps = (state) => {
  return {
    imagesData: state.img.images,
  };
};



export default connect(mapStatetoProps)(ImageGallery);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageHolder: {
    margin: 5,
    height: 160,
    flex: 1,
    position: "relative",
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
  },
  textViewHolder: {
    position: "absolute",
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,0.75)",
    paddingHorizontal: 10,
    paddingVertical: 13,
    alignItems: "center",
  },
  textOnImage: {
    color: "white",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    paddingTop: 10,
    fontSize: 18,
    color: "black",
  },
  buttonDesign: {
    padding: 5,
    backgroundColor: "#e91e63",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    alignSelf: "stretch",
  },
});
