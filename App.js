import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View>
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('./assets/images/logo.png')}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Contact Us</Text>
          <Image
          style={styles.contact}
          source={require('./assets/images/contact-icon.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.firstSectionText}>
        <Text style={styles.textOne}>Coming Soon</Text>
        <Text style={styles.textTwo}>Bringing Muslims Together</Text>
      </View>
      <View style={styles.socialImages}>
        <Image
          style={styles.social}
          source={require('./assets/images/google-play.png')}
        />
        <Image
          style={styles.social}
          source={require('./assets/images/apple-store.png')}
        />
      </View>
      <View style={styles.imageOneContainer}>
        <Image
            style={styles.landingImageOne}
            source={require('./assets/images/landing-image-2.png')}
        />
      </View>
      <View style={styles.firstSectionText}>
        <Text style={styles.textOne}>Coming Soon</Text>
        <Text style={styles.textTwo}>Get Notified When we Launch</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20
  },
  logo: {
    width: 49, 
    color: 'blue', 
    height: 13,
    marginTop: 10
  },
  button: {
    backgroundColor: 'black',
    borderRadius: 6,
    width: 97,
    height: 32,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 4
  },
  text: {
    color: 'white',
  },
  contact: {
    color: 'white',
    width: 10,
    height: 10,
  },
  firstSectionText: {
    alignItems: 'center',
    textAlign: 'center',
    marginTop: 30
  },
  textOne: {
    fontSize: 12,
    fontWeight: 500
  },
  textTwo: {
    fontSize: 36,
    fontWeight: 800
  },
  socialImages: {
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  social: {
    width: 134,
    height: 38
  },
  imageOneContainer: {
    alignItems: 'center'
  },
  landingImageOne: {
    width: 350,
    height: 396
  }
});
