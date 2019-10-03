import React, { Component } from "react";
import { Card, ListItem, Avatar } from "react-native-elements";
import { ScrollView, View, FlatList } from "react-native";
import { GALLERY } from "../shared/gallery";

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
        <View>
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
