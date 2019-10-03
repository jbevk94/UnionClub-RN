import React, { Component } from "react";
import { Text, ScrollView, FlatList, View, StyleSheet } from "react-native";
import { ListItem, Avatar, Card } from "react-native-elements";
import { PRICES } from "../shared/prices";

const styles = StyleSheet.create({
  header: {
    fontSize: 24
  },
  p: {
    fontSize: 16
  }
});

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
        <Card>
          <Avatar size={350} source={item.image} />
          <ListItem key={index} title={item.name} subtitle={item.amount} />

          <Text style={styles.p}>{item.description}</Text>
        </Card>
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
