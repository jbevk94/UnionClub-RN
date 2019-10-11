import React, { Component } from "react";
import { Text, ScrollView, StyleSheet } from "react-native";
import { Card, Avatar, Tile, Button } from "react-native-elements";

class About extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: "About Us"
  };

  render() {
    return (
      <ScrollView>
        <Tile
          imageSrc={require("../assets/about.jpg")}
          title="ABOUT US"
          featured
          activeOpacity={1}
        />
        <Card title="About the Union Club" wrapperStyle={styles.card}>
          <Text style={styles.text}>
            The Union Club is a coworking space contributing to Tacoma's growing
            artistic and entrepreneurial communities. It combines a maker
            studio, event hall, and office coworking space, in a 15,000 square
            foot historic building in downtown Tacoma.
          </Text>
          <Text style={styles.text}>
            Our mission is to support and promote local art and technology,
            creating a gathering place for creatives and ​entrepreneurs. By
            providing a supportive community, the Union Club is a place where
            members can do what they love and love where they work. We offer a
            variety of memberships that range in price and vary in privacy.
            Whether you thrive working in a communal space or favor closing the
            door behind you the Union Club fits the bill.
          </Text>
        </Card>
        <Card title="History" containerStyle={styles.card}>
          <Text style={styles.text}>
            Founded in 1888, the Union Club served as a social and business club
            for the most influential men of the time. In 1906, a three-story
            addition was designed to give women access to the Union Club. In
            1936, the University Union Club was founded and remained in the
            building until 1985.
          </Text>
          <Text style={styles.text}>
            Designated guests of the Union Club include President William Taft,
            First Lady Eleanor Roosevelt and college football coach Knute
            Rockne.
          </Text>
          <Text style={styles.text}>
            In 2016, the Union Club was in a state of disrepair and was
            purchased by Amber and Eli Moreno. With a passion for historical
            preservation they have restored the building back to its original
            grandeur and have created a new, modern take on the Union Club.
          </Text>
        </Card>
        <Button
          title="REQUEST A TOUR"
          buttonStyle={{ backgroundColor: "#544f75", margin: 15 }}
        />
        <Card title="Meet Our Team" wrapperStyle={styles.container}>
          <Avatar size={300} source={require("../assets/sasha.jpg")} />
          <Text style={styles.text}>Sasha Moreno</Text>
          <Text style={{ textAlign: "center" }}>Chief Operations Officer</Text>
        </Card>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    margin: 10,
    textAlign: "center"
  },
  container: {
    alignItems: "center",
    justifyContent: "center"
  }
});

export default About;
