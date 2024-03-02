import { View, Text, Pressable } from 'react-native'
import React from 'react'
import styles from './style'

export default function StyledButton(props) {

    const { type, content, onPress } = props

    const backgroundcolour = type === "primary" ? "#3C4142" : "#ffff"
    const textcolour = type === "primary" ? "#ffff" : "#3C4142"
    
  return (
    <View style={styles.container}>
      <Pressable
      style={[styles.button, {backgroundColor: backgroundcolour}]}
      onPress={() => onPress()}
      >
        <Text style={[styles.text, {color: textcolour}]}>{content}</Text>
      </Pressable>
    </View>
  )
}