import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Animated, Image, Button, Easing} from 'react-native';

export default class Omega extends React.Component {

  titleXpostion = new Animated.Value(0);

  animation = new Animated.Value(0);

  animationSpring = new Animated.Value(0);

  // Loop Animation
  animateView = (direction = 1) => {
    Animated.spring(
      this.titleXpostion,
      {toValue: direction * 20}
    ).start(() => {this.animateView(-1 * direction); });
  }
  
  componentDidMount() {

   this.animateView();

    // opacity animation
    Animated.timing(this.animation, {
      duration: 1000,
      toValue: 1
    }).start(() => {
      Animated.timing(this.animation,
        {toValue: -1, duration: 1000}
        ).start();
    });


    // bouncing ball animation
    Animated.spring(this.animationSpring, {
      toValue: 1,
      speed: 20,
      bounciness: 100
    }).start();


  }
  render() {

    const opacity = new Animated.Value(0);
    const onPress = () => {
      Animated.timing(opacity, {
        toValue: 1,
      }).start();
    };

    const translateX = new Animated.Value(0);
    const onPress1 = () => {
      Animated.timing(translateX, {
        toValue: 120,
        duration: 2000,
        easing:Easing.bounce,
      }).start();
    };

    return (
      <ScrollView contentContainerStyle={styles.base}>

        {/* Header Text */}
        <View style={styles.containerTwo}>
          <Animated.Text style={[styles.headerOne, {opacity} ]}> 
            Dissolving Text
        </Animated.Text>
        <Button buttonStyle={styles.button}  title='Press'  onPress={onPress} />
        </View>
        

        {/* Ball Container */}
        <View style={styles.containerOne}>
        <Button buttonStyle={styles.button}  title='Press'  onPress={onPress1} />
          <Animated.View style={[styles.box, {translateX}]}/>
          
        </View>

        {/* i Container */}
        <Animated.View style={{...styles.containerThree,  left: this.titleXpostion}}>
        <Animated.Text style={{ ...styles.headerOne, opacity: this.animationSpring}}>
        </Animated.Text>   
        </Animated.View>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({

  base: {
    flex: 1,
    backgroundColor: '#0D1B4C',
  },
  containerOne: {
    backgroundColor: '#061238',
    alignItems: "center",
    flex: 1,
  },
  containerTwo: {
    backgroundColor: '#0D1B4C',
    flex: 1,
  },
  containerThree: {
    backgroundColor: '#ff005e',
    flex: 1,
    alignSelf: "center",
    width: 100,
    
  },
  box: {
    backgroundColor: '#F6F700',
    width: 100,
    height: 100,
    borderBottomStartRadius: 100,
    borderTopStartRadius: 100,
    borderBottomEndRadius: 100,
    borderTopEndRadius: 100,
    margin: 30,
  },
  button:{
    backgroundColor: '#FF005E',
    width: "25%",
  },
  headerOne: {
    color: '#8894CE',
    margin: 24,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 50,
  },
   
});

