import React, { Component } from "react";
import { ListItem, Tile, Button, Text, Image } from "react-native-elements";
import { BENEFITS } from "../shared/benefits";
import { ScrollView, View, StyleSheet } from "react-native";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      benefits: BENEFITS
    };
  }

  static navigationOptions = {
    title: "Home"
  };

  render() {
    return (
      <ScrollView>
        <Tile
          imageSrc={require("../assets/jumbotron-bg.jpg")}
          title="Tacoma's Premier Creative Community for"
          featured
          caption="COWORKING &amp; EVENTS"
          activeOpacity={1}
          imageContainerStyle={{ backgroundColor: "rgba(0,0,0,.5)" }}
        />
        <Button
          title="REQUEST A TOUR"
          buttonStyle={{ backgroundColor: "#544f75", margin: 15 }}
        />
        <View style={{ margin: 10 }}>
          <Text h3 style={{ textAlign: "center", margin: 15 }}>
            About Us
          </Text>
          <Text style={{ textAlign: "center" }}>
            The Union Club is a mixed-use project contributing to Tacoma’s
            growing artistic and entrepreneurial community. It combines studio
            space, coworking space, office space, beautiful common areas,
            galleries and an event hall in a 15,000 square foot historic
            building in downtown Tacoma.
          </Text>
        </View>
        <Button
          title="LEARN MORE"
          buttonStyle={{
            backgroundColor: "white",
            margin: 15,
            borderColor: "#333"
          }}
          titleStyle={{ color: "#333" }}
          type="outline"
        />
        <View>
          <Text h3 style={{ textAlign: "center", margin: 15 }}>
            Benefits
          </Text>
          {this.state.benefits.map(benefit => (
            <ListItem
              key={benefit.id}
              leftIcon={{ name: benefit.image, type: "font-awesome" }}
              title={benefit.title}
              bottomDivider
            />
          ))}
        </View>
        <Tile
          imageSrc={require("../assets/hp-parallax.jpg")}
          title="COWORKING WILL HELP YOU FIND THE RIGHT PEOPLE"
          featured
          activeOpacity={1}
          imageContainerStyle={{ backgroundColor: "rgba(0,0,0,.5)" }}
          height={170}
          titleStyle={{ fontSize: 10 }}
        />
        <Image style={{ height: 250 }} source={require("../assets/map.png")} />
      </ScrollView>
    );
  }
}
export default Home;
