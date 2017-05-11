import React , { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DoubleBounce } from 'react-native-loader';


class Loader extends Component {
  render(){
    return(
      <View style={styles.container}>
         <DoubleBounce size={25} color="#EFEFEF" />
         <Text style={styles.title}>Loading...</Text>
      </View>
    )
  }
}
export default Loader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: 15,
    backgroundColor: '#173340',
  },
  logo:{
    resizeMode: 'cover',
  },
  title: {
    fontSize: 15,
    textAlign: 'center',
    color: '#efefef',
    marginTop: 20,
  }
});
