import React, { useState } from 'react'
import { Animated, TouchableOpacity } from 'react-native'

const Animations = ({}) => {
    
  const animatedWidth = new Animated.Value(50);
  const animatedHeight = new Animated.Value(100);
  
  animatedBox = () => {
      Animated.timing(animatedWidth, {
         toValue: 200,
         duration: 800,
         useNativeDriver: false
      }).start()
      Animated.timing(animatedHeight, {
         toValue: 500,
         duration: 800,
         useNativeDriver: false
      }).start()
   }
   
      const animatedStyle = { width: animatedWidth, height: animatedHeight }
      return (
          <>
         <TouchableOpacity style = {styles.container} onPress = { () => this.animatedBox()}>
            <Animated.View style = {[styles.box, animatedStyle]}/>
         </TouchableOpacity>
         </>
      );
   
}

const styles = {
    container: {
       justifyContent: 'center'
    },
    box: {
       backgroundColor: 'blue',
       width: 50,
       height: 100
    }
 }

export default Animations
