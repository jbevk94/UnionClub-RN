import React, { Component } from "react";
import { Text, ScrollView, StyleSheet } from "react-native";
import { Card,  Avatar } from "react-native-elements";


const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    color: "#787878",
    textAlign: "center"
  },
  subtitle: {
    fontSize: 22,
    textAlign: "center"
  },
  h3: {
    fontSize: 18,
    color: "#787878",
    textAlign: "center"
  },
  text: {
    fontSize: 16,
    textAlign: "center"
  }
});

class Blog extends Component {
  constructor(props) {
    super(props);
    
  }
  static navigationOptions = {
    title: "Blog"
  };
  render() {
    return (
      <ScrollView>
        <Card title="Coworking + Arts + Events">
          <Text style={styles.h3}>
            Blog Coworking Events History Inspiration Interview Members Press
            Uncategorized
          </Text>
          <Avatar size={300} source={require("../assets/may14.jpg")} />
          <Text style={styles.title}>
            May 14, 2018, BLOG, COWORKING, INSPIRATION, INTERVIEW, MEMBERS
          </Text>
          <Text style={styles.subtitle}>
            COWORKING AT UNION CLUB IS MOM APPROVED
          </Text>
          <Text style={styles.text}>
            So often when we talk about the history of women in the…
          </Text>
        </Card>

        <Card>
          <Avatar size={300} source={require("../assets/April2.png")} />
          <Text style={styles.title}>
            April 2, 2018, COWORKING, EVENTS, HISTORY
          </Text>
          <Text style={styles.subtitle}>
            UNION CLUB AND TACOMA CELEBRATE SPRING, THEN AND...
          </Text>
          <Text style={styles.text}>
            Spring in the Northwest evokes our favorite yellow perennial, but
            the ubiquitous…
          </Text>
        </Card>

        <Card>
          <Avatar size={300} source={require("../assets/March19.png")} />
          <Text style={styles.title}>March 19, 2018, UNCATEGORIZED</Text>
          <Text style={styles.subtitle}>
            COMMUNITY SPOTLIGHT: JUSTIN WILLIAMS
          </Text>
          <Text style={styles.text}>
            Every month we feature the work of one of our members, who…
          </Text>
        </Card>

        <Card>
          <Avatar size={300} source={require("../assets/feb15.jpg")} />
          <Text style={styles.title}>
            February 15, 2018, BLOG, COWORKING, INSPIRATION, MEMBERS
          </Text>
          <Text style={styles.subtitle}>
            COMMUNITY SPOTLIGHT: NUVIA and TED PERKINS
          </Text>
          <Text style={styles.text}>
            Every month we feature the work of one of our members, who…
          </Text>
        </Card>

        <Card>
          <Avatar size={300} source={require("../assets/jan17.jpg")} />
          <Text style={styles.title}>January 17, 2018, EVENTS, HISTORY</Text>
          <Text style={styles.subtitle}>HISTORY THROWBACK: JANUARY 1947</Text>
          <Text style={styles.text}>
            Welcome to our monthly "throwback” series where we spotlight Union
            Club events…
          </Text>
        </Card>

        <Card>
          <Avatar size={300} source={require("../assets/jan2.jpg")} />
          <Text style={styles.title}>January 2, 2018, BLOG</Text>
          <Text style={styles.subtitle}>
            WE’RE READY TO HIT THE GROUND RUNNING INTO 2018!
          </Text>
          <Text style={styles.text}>
            As many of you know, Union Club Tacoma has experienced many…
          </Text>
        </Card>

        <Card>
          <Avatar size={300} source={require("../assets/dec14.jpg")} />
          <Text style={styles.title}>December 14, 2017, MEMBERS</Text>
          <Text style={styles.subtitle}>
            COMMUNITY SPOTLIGHT: MARGARET GROVES
          </Text>
          <Text style={styles.text}>
            Every month we feature the work of one of our members, who…
          </Text>
        </Card>
      </ScrollView>
    );
  }
}

export default Blog;

