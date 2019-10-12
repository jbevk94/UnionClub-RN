import React, { Component } from "react";
import { Card } from "react-native-elements";
import { ScrollView, Text, StyleSheet, Image } from "react-native";

const styles = StyleSheet.create({
  pics: {
    width: 300,
    height: 400,
    padding: 20,
    marginBottom: 20
  },
  title: {
    fontSize: 24
  }
});

class Gallery extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: "Gallery"
  };

  render() {
    return (
      <ScrollView>
        <Card title="Gallery">
          <Text style={styles.title}>Balconies</Text>
          <Image
            source={{
              uri:
                "https://unionclubtacoma.com/wp-content/uploads/2018/03/BalconyUnionClub3-390x260.jpg"
            }}
            style={styles.pics}
          />
          <Image
            source={{
              uri:
                "https://unionclubtacoma.com/wp-content/uploads/2018/03/BalconyUnionClub2-390x260.jpg"
            }}
            style={styles.pics}
          />
          <Image
            source={{
              uri:
                "https://unionclubtacoma.com/wp-content/uploads/2018/03/BalconyUnionClub1-300x200.jpg"
            }}
            style={styles.pics}
          />
          <Text style={styles.title}>Club Room</Text>

          <Image
            source={{
              uri:
                "https://unionclubtacoma.com/wp-content/uploads/2018/02/club-room1-300x200.jpg"
            }}
            style={styles.pics}
          />
          <Image
            source={{
              uri:
                "https://unionclubtacoma.com/wp-content/uploads/2018/02/club-room2-300x200.jpg"
            }}
            style={styles.pics}
          />
          <Image
            source={{
              uri:
                "https://unionclubtacoma.com/wp-content/uploads/2018/02/club-room3-300x200.jpg"
            }}
            style={styles.pics}
          />
          <Text style={styles.title}>Velvet Room</Text>

          <Image
            source={{
              uri:
                "https://unionclubtacoma.com/wp-content/uploads/2018/02/Velvet-Room2-300x200.jpg"
            }}
            style={styles.pics}
          />
          <Image
            source={{
              uri:
                "https://unionclubtacoma.com/wp-content/uploads/2018/02/Velvet-Room1-300x200.jpg"
            }}
            style={styles.pics}
          />
          <Image
            source={{
              uri:
                "https://unionclubtacoma.com/wp-content/uploads/2018/02/Velvet-Room3-300x200.jpg"
            }}
            style={styles.pics}
          />
          <Text style={styles.title}>Sky Room</Text>

          <Image
            source={{
              uri:
                "https://unionclubtacoma.com/wp-content/uploads/2018/02/Sky-Room111-390x260.jpg"
            }}
            style={styles.pics}
          />
          <Image
            source={{
              uri:
                "https://unionclubtacoma.com/wp-content/uploads/2018/02/Sky-Room222-390x260.jpg"
            }}
            style={styles.pics}
          />
          <Image
            source={{
              uri:
                "https://unionclubtacoma.com/wp-content/uploads/2018/02/Sky-Room333-390x260.jpg"
            }}
            style={styles.pics}
          />

          <Text style={styles.title}>Second Level</Text>
          <Image
            source={{
              uri:
                "https://unionclubtacoma.com/wp-content/uploads/2018/02/upstairs1-300x225.jpg"
            }}
            style={styles.pics}
          />
          <Image
            source={{
              uri:
                "https://unionclubtacoma.com/wp-content/uploads/2018/02/upstairs2-300x225.jpg"
            }}
            style={styles.pics}
          />
          <Image
            source={{
              uri:
                "https://unionclubtacoma.com/wp-content/uploads/2018/02/upstairs3-300x225.jpg"
            }}
            style={styles.pics}
          />
          <Text style={styles.title}>Conference Room</Text>

          <Image
            source={{
              uri:
                "https://unionclubtacoma.com/wp-content/uploads/2018/03/UnionClubConferenceRoom1-300x200.jpg"
            }}
            style={styles.pics}
          />
          <Image
            source={{
              uri:
                "https://unionclubtacoma.com/wp-content/uploads/2018/03/UnionClubConferenceRoom2-300x200.jpg"
            }}
            style={styles.pics}
          />
          <Image
            source={{
              uri:
                "https://unionclubtacoma.com/wp-content/uploads/2018/03/UnionClubConferenceRoom3-300x200.jpg"
            }}
            style={styles.pics}
          />
          <Text style={styles.title}>Great Hall</Text>
          <Image
            source={{
              uri:
                "https://unionclubtacoma.com/wp-content/uploads/2018/02/great-hall1-300x200.jpg"
            }}
            style={styles.pics}
          />
          <Image
            source={{
              uri:
                "https://unionclubtacoma.com/wp-content/uploads/2018/02/great-hall2-300x200.jpg"
            }}
            style={styles.pics}
          />
          <Image
            source={{
              uri:
                "https://unionclubtacoma.com/wp-content/uploads/2018/02/great-hall3-300x200.jpg"
            }}
            style={styles.pics}
          />
        </Card>
      </ScrollView>
    );
  }
}
export default Gallery;
