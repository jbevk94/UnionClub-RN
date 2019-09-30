import React, { Component } from "react";
import {
  createStackNavigator,
  createDrawerNavigator,
  DrawerItems,
  SafeAreaView
} from "react-navigation";
import Gallery from "./GalleryComponent";
import { View, Platform, ScrollView, Image, StyleSheet, Text } from "react-native";
import Blog from "./BlogComponent";
import { Icon } from "react-native-elements";

const CustomDrawerContentComponent = props => (
  <ScrollView>
    <SafeAreaView
      style={styles.container}
      forceInset={{ top: "always", horizontal: "never" }}
    >
      <View style={styles.drawerHeader}>
        <View style={{ flex: 1 }}>
          {/* <Image
            source={require("")}
            style={styles.drawerImage}
          /> */}
        </View>
        <View style={{ flex: 2 }}>
          <Text style={styles.drawerHeaderText}>Uncion CLub Tacoma</Text>
        </View>
      </View>
      <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>
);

const GalleryNavigator = createStackNavigator(
  {
    Gallery: { screen: Gallery },
    navigationOptions: ({ navigation }) => ({
      headerLeft: (
        <Icon
          name="menu"
          size={24}
          color="white"
          onPress={() => navigation.toggleDrawer()}
        />
      )
    })
    // Add CSS style
  },
  {
    initialRouteName: "Gallery",
    navigationOptions: {
      headerStyle: {
        backgroundColor: "rgba(0,0,0,0)"
      },
      headerTintColor: "",
      headerTitleStyle: {
        color: "rgba(0,0,0,0)"
      }
    }
  }
);

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
const BlogNavigator = createStackNavigator(
  {
    Blog: { screen: Blog }
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#512DA8"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        color: "#fff"
      }
    }
  }
);

const MainNavigator = createDrawerNavigator(
  {
    // Home: {
    //   screen: HomeNavigator,
    //   navigationOptions: {
    //     title: 'Home',
    //     drawerLabel: 'Home',
    // drawerIcon: ({ tintColor, focused }) => (
    //   <Icon
    //     name='home'
    //     type='font-awesome'
    //     size={24}
    //     color={tintColor}
    //   />
    // )
    //   }
    // },
    Gallery: {
      screen: GalleryNavigator,
      navigationOptions: {
        title: "Gallery",
        drawerLabel: "Gallery",
        drawerIcon: ({ tintColor, focused }) => (
          <Icon
            name="gallery"
            type="font-awesome"
            size={24}
            color={tintColor}
          />
        )
      }
    },
    //   About: {
    //     screen: AboutNavigator,
    //     navigationOptions: {
    //       title: 'About',
    //       drawerLabel: 'About',
    // drawerIcon: ({ tintColor, focused }) => (
    //   <Icon
    //     name='about'
    //     type='font-awesome'
    //     size={24}
    //     color={tintColor}
    //   />
    // )
    //     }
    // },
    Blogs: {
      screen: BlogNavigator,
      navigationOptions: {
        title: "Blog",
        drawerLabel: "Blog",
        drawerIcon: ({ tintColor, focused }) => (
          <Icon name="blog" type="font-awesome" size={24} color={tintColor} />
        )
      }
    }
  },
  {
    drawerBackgroundColor: "#D1C4E9",
    contentComponent: CustomDrawerContentComponent
  }
);

class Main extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          // paddingTop: Platform.OS === "ios" ? 0 : Expo.Constants.statusBarHeight
        }}
      >
        <MainNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  drawerHeader: {
    backgroundColor: "#512DA8",
    height: 140,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    flexDirection: "row"
  },
  drawerHeaderText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold"
  },
  drawerImage: {
    margin: 10,
    width: 80,
    height: 60
  }
});

export default Main;
