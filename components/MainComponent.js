import React, { Component } from "react";
import {
  createStackNavigator,
  createDrawerNavigator,
  DrawerItems,
  SafeAreaView
} from "react-navigation";
import Gallery from "./GalleryComponent";
import Login from "./LoginComponent";
import About from "./AboutComponent";
import {
  View,
  ScrollView,
  Image,
  StyleSheet,
  Text
} from "react-native";
import Blog from "./BlogComponent";
import { Icon } from "react-native-elements";
import Pricing from "./PricingComponent";
import Home from "./HomeComponent";

const CustomDrawerContentComponent = props => (
  <ScrollView>
    <SafeAreaView
      style={styles.container}
      forceInset={{ top: "always", horizontal: "never" }}
    >
      <View style={styles.drawerHeader}>
        <View style={{ flex: 1 }}>
          <Image
            source={require("../assets/Union-Club-White.png")}
            style={styles.drawerImage}
          />
        </View>
        <View style={{ flex: 2 }}>
          <Text style={styles.drawerHeaderText}>Union Club Tacoma</Text>
        </View>
      </View>
      <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>
);

const GalleryNavigator = createStackNavigator(
  {
    Gallery: { screen: Gallery }
  },
  {
    navigationOptions: ({ navigation }) => ({
      initialRouteName: "Gallery",
      headerStyle: {
        backgroundColor: "#333"
      },
      headerTitleStyle: {
        color: "white"
      },
      headerRight: (
        <Icon
          name="menu"
          size={24}
          color="white"
          onPress={() => {
            navigation.toggleDrawer();
          }}
        />
      )
    })
  }
);

const PriceNavigator = createStackNavigator(
  {
    Pricing: { screen: Pricing }
  },
  {
    navigationOptions: ({ navigation }) => ({
      initialRouteName: "Pricing",
      headerStyle: {
        backgroundColor: "#333"
      },
      headerTitleStyle: {
        color: "white"
      },
      headerRight: (
        <Icon
          name="menu"
          size={24}
          color="white"
          onPress={() => navigation.toggleDrawer()}
        />
      )
    })
  }
);

const HomeNavigator = createStackNavigator(
  {
    Home: { screen: Home }
  },
  {
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: "#333"
      },
      headerTitleStyle: {
        color: "#fff"
      },
      headerRight: (
        <Icon
          name="menu"
          size={24}
          color="white"
          onPress={() => {
            navigation.toggleDrawer();
          }}
        />
      )
    })
  }
);

const AboutNavigator = createStackNavigator(
  {
    About: { screen: About }
  },
  {
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: "#333"
      },
      headerTitleStyle: {
        color: "#fff"
      },
      headerRight: (
        <Icon
          name="menu"
          size={24}
          color="white"
          onPress={() => {
            navigation.toggleDrawer();
          }}
        />
      )
    })
  }
);

const BlogNavigator = createStackNavigator(
  {
    Blog: { screen: Blog }
  },
  {
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: "#333"
      },
      headerTitleStyle: {
        color: "#fff"
      },
      headerRight: (
        <Icon
          name="menu"
          size={24}
          color="white"
          onPress={() => {
            navigation.toggleDrawer();
          }}
        />
      )
    })
  }
);

const LoginNavigator = createStackNavigator(
  {
    Login: Login
  },
  {
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: "#333"
      },
      headerTitleStyle: {
        color: "#fff"
      },
      headerRight: (
        <Icon
          name="menu"
          size={24}
          color="white"
          onPress={() => {
            navigation.toggleDrawer();
          }}
        />
      )
    })
  }
);

const MainNavigator = createDrawerNavigator(
  {
    Home: {
      screen: HomeNavigator,
      navigationOptions: {
        title: "Home",
        drawerLabel: "Home",
        drawerIcon: ({ tintColor, focused }) => (
          <Icon name="home" type="font-awesome" size={24} color={tintColor} />
        )
      }
    },
    Gallery: {
      screen: GalleryNavigator,
      navigationOptions: {
        title: "Gallery",
        drawerLabel: "Gallery",
        drawerIcon: ({ tintColor, focused }) => (
          <Icon name="camera" type="font-awesome" size={24} color={tintColor} />
        )
      }
    },
    Pricing: {
      screen: PriceNavigator,
      navigationOptions: {
        title: "Pricing",
        drawerLabel: "Pricing",
        drawerIcon: ({ tintColor, focused }) => (
          <Icon name="list" type="font-awesome" size={24} color={tintColor} />
        )
      }
    },
    About: {
      screen: AboutNavigator,
      navigationOptions: {
        title: "About",
        drawerLabel: "About",
        drawerIcon: ({ tintColor, focused }) => (
          <Icon name="users" type="font-awesome" size={24} color={tintColor} />
        )
      }
    },
    Blogs: {
      screen: BlogNavigator,
      navigationOptions: {
        title: "Blog",
        drawerLabel: "Blog",
        drawerIcon: ({ tintColor, focused }) => (
          <Icon
            name="quote-right"
            type="font-awesome"
            size={24}
            color={tintColor}
          />
        )
      }
    },
    Login: {
      screen: LoginNavigator,
      navigationOptions: {
        title: "Login",
        drawerLabel: "Login",
        drawerIcon: ({ tintColor, focused }) => (
          <Icon
            name="sign-in"
            type="font-awesome"
            size={24}
            color={tintColor}
          />
        )
      }
    }
  },
  {
    drawerBackgroundColor: "#787878",
    contentComponent: CustomDrawerContentComponent
  }
);

class Main extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1
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
    backgroundColor: "#333",
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
    margin: 15,
    width: 70,
    height: 60
  }
});

export default Main;
