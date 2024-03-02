import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './style'
const Tlogo = require("../../assets/images/logo.png") 
const Tmenu = require("../../assets/images/menu.png") 

export default function Header() {
  return (
    <View style= {styles.container}>
      <Image style={styles.logo} source={Tlogo} />
      <Image style={styles.menu} source={Tmenu} />
    </View>
  )
}