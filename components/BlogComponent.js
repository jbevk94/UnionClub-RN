import React, { Component } from "react";
import { Text, ScrollView, FlatList, StyleSheet } from "react-native";
import { Card, ListItem, Avatar } from "react-native-elements";
import { BLOGS } from "../shared/blogs";

const styles = StyleSheet.create({
  header: {
    fontSize: 24
  },
  p: {
    fontSize: 16
  },
  h3: {
    fontSize: 18,
    color:'#787878'
  }
});

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: BLOGS
    };
  }
  static navigationOptions = {
    title: "Blog"
  };
  render() {
    const renderBlogger = ({ item, index }) => {
      return (
        <Card>
           <Avatar size={350} source={item.image} />
          <ListItem key={index} 
          title={item.subtitle}
          subtitle={item.title}  />
          <Text style={styles.p}>{item.description}</Text>
        </Card>
      );
    };
    return (
      <ScrollView>
<Card title="Coworking + Arts + Events">
          <Text style={styles.h3}>
            Blog Coworking Events History Inspiration Interview Members Press
            Uncategorized
          </Text>
        <FlatList
          data={this.state.blogs}
          renderItem={renderBlogger}
          keyExtractor={item => item.id.toString()}
        />
        </Card>
      </ScrollView>
    );
  }
}

export default Blog;
