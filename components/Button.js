import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { useHistory } from 'react-router-native'

const Button = (props) => {
    
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <Text style={styles.text}>{props.name}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = {
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 15,
    borderRadius: 10,
    margin: 20,
    marginTop: 30,
  },
  text: {
    fontSize: 20,
  },
};