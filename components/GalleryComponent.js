import React, { Component } from "react";
import { Card, ListItem, Avatar } from "react-native-elements";
import { ScrollView, View, FlatList, StyleSheet } from "react-native";
import { GALLERY } from "../shared/gallery";

const styles = StyleSheet.create ({
header: {
  fontSize: 500,
 

  color: "#544f75",
  padding: 10,
  margin: 10,
}
});


class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gallery: GALLERY
    };
  }

  static navigationOptions = {
    title: "Gallery"
  };

  render() {
    const renderGallery = ({ item, index }) => {
      return (
        <View style={styles.header}>
          <ListItem key={index} title={item.name} subtitle={item.subtitle} />
          <Avatar size={400} source={item.image} />
        </View>
      );
    };
    return (
      <ScrollView>
        <Card title="Gallery">
          <FlatList
            data={this.state.gallery}
            renderItem={renderGallery}
            keyExtractor={item => item.id.toString()}
          />
        </Card>
      </ScrollView>
    );
  }
}
export default Gallery;
