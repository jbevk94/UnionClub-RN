import React, { Component } from "react";
import { Card, ListItem } from "react-native-elements";
import { Text, ScrollView, View, FlatList } from "react-native";
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
        <ListItem
          key={index}
          title={item.name}
          subtitle={item.description}
        
        />
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
