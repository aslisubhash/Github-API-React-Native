import React from "react";

import {View, Text, StyleSheet, Image } from "react-native";

import {Container, Header, Content, Card, CardItem, H1} from "native-base";


const User = ({details}) => {
    
    return (
        <Card style={styles.card}>
            <CardItem cardBody style={styles.cardItem}>
                <Image
                source={
                    {
                        uri: details.avatar_url,
                        width: 250,
                        height: 250
                    }
                }
                style={styles.image}
                />
            </CardItem>
        </Card>
    )
}

export default User;

const styles = StyleSheet.create({
    card: {
      width: '90%',
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: '#4f8a8b',
      borderColor: '#4f8a8b',
      marginTop:50,
      borderWidth: 2,
    },
    cardItem: {
      backgroundColor: '#4f8a8b',
    },
    image: {
      width: 150,
      height: 150,
      borderRadius: 150 / 2,
      overflow: 'hidden',
      borderWidth: 3,
      borderColor: '#fbd46d',
      marginTop: -50,
    },
    text: {
      color: '#000',
    },
  });
  