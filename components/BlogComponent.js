import React, { Component } from "react";
import { Text, ScrollView, FlatList } from "react-native";
import { Card, ListItem } from "react-native-elements";
import { BLOGS } from "../shared/blogs";

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
        const renderBlogger = ({item,index}) => {
       return (
           <ListItem
          key={index}
          title={item.title}
          leftAvatar={{ source: { uri: item.avatar_url } }}
          subtitle={item.description}
          
        />
           );
     };
     return (
       <ScrollView>
           
     <Card title="Coworking + Arts + Events">
       <Text>
         Blog Coworking Events History Inspiration Interview Members Press Uncategorized
       </Text>
     <FlatList
       data={this.state.blogs}
       renderItem={renderBlogger}
       keyExtractor={item => item.id.toString()}
     />
     </Card>
           </ScrollView>
     );}   
         
   }

    export default Blog;