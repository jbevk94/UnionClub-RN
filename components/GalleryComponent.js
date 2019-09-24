import React, { Component } from "react";
import { Card } from "react-native-elements";
import { Text, ScrollView, View } from "react-native";

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
          leftAvatar={{ source: require("./images/alberto.png") }}
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
