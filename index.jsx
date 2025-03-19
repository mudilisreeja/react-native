import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import {Link}from 'expo-router'
import { Pressable } from 'react-native';


const App = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/images/iced-coffee.png')}

        style={styles.image}
        resizeMode="cover"
      >
        <Text style={styles.title}>Cofee shop</Text>
        <link href="/explore" style={{marginHorizontal:'auto'}} asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Explore</Text>
        </Pressable>
        </link>
      </ImageBackground>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor:'rgba(0,0,0,0.5)',
    marginBottom:120
  },
  button:{
    height:60,
    borderRadius:20,
    backgroundColor:rgba(0,0,0,0.75),
    padding:6,
    justifyContent:'center',

  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor:'rgba(0,0,0,0.5)',
    padding:4,
  },
});
