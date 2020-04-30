import React, { Component } from "react";
import { Image, StyleSheet, View, Text  } from "react-native";
import Icon from "@expo/vector-icons/Ionicons";

export default class ProfileHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: "https://www.dike.lib.ia.us/images/sample-1.jpg/image",
          }}
        />
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            flexDirection: "column",
          }}
        >
          <View style={{ flexDirection: "row", margin: 10 }}>
            <View style={{ flex: 6, justifyContent: "flex-end" }}>
              <Icon name="md-arrow-back" color="#ffffff" size={25} />
            </View>
            <View style={{ flex: 1 }}>
              <Icon name="md-create" color="#ffffff" size={25} />
            </View>
            <View style={{ flex: 1 }}>
              <Icon name="md-refresh" color="#ffffff" size={25} />
            </View>
          </View>

          <View
            style={{
              flex: 1,

              alignItems: "center",
            }}
          >
            <Text style={{ color: "white", fontSize: 20, margin: 4 }}>
             <Icon name="md-person" color="white" size={20} /> {"Dhruv Ramdev"}
            </Text>
            <Text style={{ color: "white", margin: 4, fontSize: 14 }}>
            <Icon name="md-navigate" color="white" size={16} /> {"New Delhi, Delhi"}
            </Text>
            <Text style={{ color: "white", margin: 6, fontSize: 10 }}>
              Random Bio for Random People {"\n"}  Don't Forget to like my pics
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, flexDirection: "row" },
  image: { width: "100%", height: "100%", position: "absolute", padding: 4 },
});
