import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import styles from './styles'
import StyledButton from '../StyledButton'


export default function CarItem(props) {

  const { name, tagline, taglineCTA, image } = props.car

  return (
    <View style={styles.carContainer}>
    <ImageBackground 
    source={image}
    style={styles.image}
     />

    <View style={styles.titles}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.subtitle}>{tagline}{" "}</Text>
      <Text style={styles.subtitleCTA}>{taglineCTA}</Text>
    </View>

    <View style={styles.buttonContainer}>
    <StyledButton
      type="primary" 
      content={"Custom Order"}
      onPress={() => {
        console.warn("Custom Order was pressed");
      }}
      />

      <StyledButton
        type="secondary" 
        content={"Existing Inventory"}
        onPress={() => {
          console.warn("Custome Order was pressed");
        }}
      />
    </View>

    </View>
  )
}