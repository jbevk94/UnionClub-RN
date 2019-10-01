import React, { Component } from "react";
import { Text, ScrollView, FlatList } from "react-native";
import { Card, ListItem } from "react-native-elements";
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
        const renderPrice = ({item,index}) => {
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
       data={this.state.prices}
       renderItem={renderPrice}
       keyExtractor={item => item.id.toString()}
     />
     </Card>
           </ScrollView>
     );}   
         
   }

    export default Pricing;