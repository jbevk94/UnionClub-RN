import React, { Component } from 'react';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import Gallery from './GalleryComponent';
import { View, Platform } from 'react-native';
import Blog from "./BlogComponent";

const GalleryNavigator = createStackNavigator({
    Gallery: { screen: Gallery },
      // Add CSS style
}, {
    initialRouteName: 'Gallery',
    navigationOptions: {
        headerStyle: {
            backgroundColor: "rgba(0,0,0,0)"
        },
        headerTintColor: '',
        headerTitleStyle: {
            color: ""            
        }
    }
});

// const HomeNavigator = createStackNavigator({
//     Home: { screen: Home }
//   }, {
//     navigationOptions: {
//       headerStyle: {
//         backgroundColor: "#512DA8"
//       },
//       headerTintColor: "#fff",
//       headerTitleStyle: {
//         color: "#fff"
//       }
//     }
// });
// const AboutNavigator = createStackNavigator({
//     About: { screen: About }
//   }, {
//     navigationOptions: {
//       headerStyle: {
//         backgroundColor: "#512DA8"
//       },
//       headerTintColor: "#fff",
//       headerTitleStyle: {
//         color: "#fff"
//       }
//     }
// });
const BlogNavigator = createStackNavigator({
    Blog: { screen: Blog }
  }, {
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#512DA8"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        color: "#fff"
      }
    }
});

const MainNavigator = createDrawerNavigator({
    // Home: {
    //   screen: HomeNavigator,
    //   navigationOptions: {
    //     title: 'Home',
    //     drawerLabel: 'Home'
    //   }
    // },
    Gallery: {
      screen: GalleryNavigator,
      navigationOptions: {
        title: 'Gallery',
        drawerLabel: 'Gallery'
    }
  }, 
//   About: {
//     screen: AboutNavigator,
//     navigationOptions: {
//       title: 'About',
//       drawerLabel: 'About'
//     }
// },
Blogs: {
    screen: BlogNavigator,
    navigationOptions: {
      title: 'Blog',
      drawerLabel: 'Blog'
    }
}
  },
 {    drawerBackgroundColor: '#D1C4E9'});

class Main extends Component {
  render() {
    return(
      <View style={{flex:1, paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight }}>
        <MainNavigator />
      </View>
    );
  }
}

export default Main;