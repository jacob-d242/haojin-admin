import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from '@react-native-firebase/app';

export default function TetstMatches {
  state = {
    isLoading: true,
    Matches: []
  };
    const [isLoading, setIsLoading] = (true);
    
  componentDidMount() {
    const usersRef = firebase.firestore().collection('Matches');

    usersRef.get()
    .then(querySnapshot => {
      const Matches = querySnapshot.docs.map(doc => doc.data());
      this.setState({ Matches, isLoading: false });
    })
    .catch(error => {
      console.log(error);
      this.setState({ isLoading: false });
    });
  }

  render() {
    const { isLoading, Matches } = this.state;

    if (isLoading) {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Loading...</Text>
        </View>
      );
    }

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {Matches.map((Match, index) => (
          <Text key={index}>{Match.Home}</Text>
        ))}
      </View>
    );
  }
}