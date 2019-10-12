import React, { Component } from "react";
import { Text, ScrollView,  StyleSheet } from "react-native";
import { Avatar, Card } from "react-native-elements";


const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: "bold"
  },
  pics: {
    width: 300,
    height: 400,
    padding: 20,
    marginBottom: 20
  },

  price: {
    fontSize: 50,
    color: "#787878",
  }
});

class Pricing extends Component {
  constructor(props) {
    super(props);
  
  }
  static navigationOptions = {
    title: "Pricing"
  };
  render() {
    return (
      <ScrollView>
        <Card>
          <Avatar size={300} source={require("../assets/DayPass.png")} />
          <Text style={styles.title}>DAY PASS</Text>
          <Text style={styles.price}>$ 20 /day </Text>
          <Text style={styles.text}>
            Try us out for the day and work in our common areas. Grab a cup of
            coffee on us, bring your laptop, pick a seat, and get to work. (Day
            passes are good from 9am - 5pm Monday - Friday)
          </Text>
        </Card>

        <Card>
          <Avatar size={300} source={require("../assets/5DayPass.jpg")} />
          <Text style={styles.title}>5 DAY PASSES</Text>
          <Text style={styles.price}>$ 75 / </Text>
          <Text style={styles.text}>
            Try us out for the day and work in our common areas. Grab a cup of
            coffee on us, bring your laptop, pick a seat, and get to work. 5 day
            passes for the price of less than 4! (Save $25) Can be used…
          </Text>
        </Card>

        <Card>  
          <Avatar size={300} source={require("../assets/Cafe.png")} /> 
          <Text style={styles.title}>CLUB CAFE MEMBERSHIP</Text>
          <Text style={styles.price}>$ 99 /month</Text>
          <Text style={styles.text}>
            Enjoy a flexible work space without the commitment of a private
            office or dedicated desk. Work in our common areas Monday through
            Friday 9-5pm.
          </Text>
        </Card>

        <Card> 
          <Avatar size={300} source={require("../assets/commons.png")} />
          <Text style={styles.title}> COMMONS MEMBERSHIP </Text>
          <Text style={styles.price}>175 /month</Text>
          <Text style={styles.text}>
            Enjoy a flexible work space without the commitment of a private
            office or dedicated desk. Work in our common areas Monday through
            Friday 9-5pm.
          </Text>
        </Card>

        <Card>
          <Avatar size={300} source={require("../assets/DedicatedDesk.png")} />
          <Text style={styles.title}>DEDICATED DESK</Text>
          <Text style={styles.price}>$ 199 /month and up</Text>
          <Text style={styles.text}>
          Leave your work for the night and come back to it in the morning. A desk of your own in shared space.   Learn more about Private Office availability *By requesting a tour you agree to allow Union Club Tacoma to periodically send you emails.
          </Text>
        </Card>

        <Card>  
          <Avatar size={300} source={require("../assets/Private-office.png")} /> 
          <Text style={styles.title}>PRIVATE OFFICE</Text>
          <Text style={styles.price}>$ 399 /month and up</Text>
          <Text style={styles.text}>
          Take comfort in shutting your door and working in spacious comfort. Whether you are a team of one or eight, we have private offices available for rent.   Learn more about Private Office availability *By requesting to learn more you agree to allow Union Club…
          </Text>
        </Card>

        <Card> 
          <Avatar size={300} source={require("../assets/EventRentals.jpg")} />
          <Text style={styles.title}>GREAT HALL EVENT RENTALS</Text>
          <Text style={styles.price}>$ 75 /hour and up</Text>
          <Text style={styles.text}>
          PAST  -  PRESENT  -  PRICING  -  FEATURES  -  PRAISE  -  CONTACT The Great Hall of the Past Organized by a group of well-known businessmen in 1888, the Union Club Tacoma is one of Tacoma's oldest event venues. Events over the years have ranged from festive - think the annual Daffodil…
          </Text>
        </Card>
      </ScrollView>
    );
  }
}

export default Pricing;
