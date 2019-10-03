import React, { Component } from "react";
import { Text, ScrollView, FlatList, View } from "react-native";
import { ListItem, Avatar } from "react-native-elements";
import { PRICES } from "../shared/prices";

class Pricing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prices: PRICES
    };
  }
  static navigationOptions = {
    title: "Pricing"
  };
  render() {
    const renderPrice = ({ item, index }) => {
      return (
        <View>
          <ListItem key={index} title={item.name} subtitle={item.amount} />
          <Avatar size={300} source={item.image} />
          <Text>{item.description}</Text>
        </View>
      );
    };
    return (
      <ScrollView>
        
          <FlatList
            data={this.state.prices}
            renderItem={renderPrice}
            keyExtractor={item => item.id.toString()}
          />
    
      </ScrollView>
    );
  }
}

export default Pricing;
