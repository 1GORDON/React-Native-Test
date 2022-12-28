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
      <View style={styles.notifyButtonContainer}>
        <TouchableOpacity style={styles.notifyButton}>
          <Text style={styles.text}>Notify Me</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.imageOneContainer}>
        <Text>Don't worry, we won't spam you :)</Text>
        <Image
            style={styles.landingImageOne}
            source={require('./assets/images/landing-image-1.png')}
        />
      </View>
      <View style={styles.socialIconsContainer}>
        <View style={styles.buttonCircle}>
          <Image
                style={styles.socialIcons}
                source={require('./assets/images/facebook.png')}
          />
        </View>
        <View style={styles.buttonCircle}>
          <Image
                style={styles.socialIcons}
                source={require('./assets/images/twitter.png')}
          />
        </View>
        <View style={styles.buttonCircle}>
          <Image
                style={styles.socialIcons}
                source={require('./assets/images/instagram.png')}
          />
        </View>
        <View style={styles.buttonCircle}>
          <Image
                style={styles.socialIcons}
                source={require('./assets/images/tiktok.png')}
          />
        </View>
        <View style={styles.buttonCircle}>
          <Image
                style={styles.socialIcons}
                source={require('./assets/images/youtube.png')}
          />
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerLine}></Text>
        <Text style={styles.footerText}>Copyright © 2022 Soora. All rights reserved</Text>
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
    borderRadius: 4,
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
  },
  notifyButtonContainer: {
    margin: 10,
    width: 340,
    height: 45,
    borderRadius: 100,
    borderColor: 'black',
    borderWidth: 1,
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  notifyButton: {
    marginRight: 5,
    width: 100,
    height: 36,
    borderRadius: 100,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center'
  },
  socialIconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 150
  },
  buttonCircle: {
    width: 40,
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 200,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5
  },
  socialIcons: {
    width: 24,
    height: 24,
    margin: 10,
    borderColor: 'black',
    borderRadius: 100
  },
  footer: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  footerLine: {
    color: 'black',
    width: 400,
    borderWidth: 0.5
  },
  footerText: {
    height: 15,
    marginBottom: 20,
    marginTop: 15
  }
});
// Built with no components