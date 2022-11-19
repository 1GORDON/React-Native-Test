import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('./assets/images/logo.png')}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Contact Us</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'space-between',
    margin: 20
  },
  logo: {
    width: 74, 
    color: 'blue', 
    height: 15,
    marginTop: 18
  },
  button: {
    backgroundColor: 'black',
    borderRadius: 6,
    width: 90,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: 'white',
  }
});
