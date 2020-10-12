/**
 * Scene for home view
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Home: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="white-content" />
      <SafeAreaView>
        <View>
            <Image
                style={styles.buddyImg}
                source={{
                    uri: 'https://thispersondoesnotexist.com/image'
                }}
            />
        </View>
        <View style={styles.card}>
                <Text style={styles.title}>
                    Nana Mathis
                    {"\n"}
                    {"\n"}
                </Text>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  buddyImg: {
    height: 380,
  },
  card: {
    margin: -25,
    backgroundColor: "white",
    borderRadius: 120,
    paddingTop: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  title: {
    fontSize: 32,
    left: -80
  }
});

export default Home;
