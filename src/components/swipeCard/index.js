// SwipeCards.js
'use strict';

import React, { Component } from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

import SwipeCards from 'react-native-swipe-cards';

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.card}>
        <Image
            style={styles.buddyImg}
            source={{
                uri: this.props.imgUrl
            }}
        />
        <View style={styles.cardFooter}>
            <Text style={styles.cardTitle}>
              {this.props.name}
            </Text>
            <Text style={styles.cardText}>{this.props.description}</Text>

        </View>
      </View>
    )
  }
}

class NoMoreCards extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text style={styles.noMoreCardsText}>No more cards</Text>
      </View>
    )
  }
}

export default class extends React.Component {
  constructor(props) {
    super(props);
    // Should replace cards data with actual backend data
    this.state = {
      cards: [
        {name: 'Remi, CS50', imgUrl: 'https://image.freepik.com/foto-gratis/adorable-estudiante-cabello-rizado-viste-camiseta-blanca-informal-mono-sostiene-bloc-notas-o-libro-texto_95891-107.jpg', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'},
        {name: 'Nana Mathis', imgUrl: 'https://www.arenasimulation.com/public/uploads/images/general/studentpic1.png', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'},
        {name: 'Saul Montes De Oca', imgUrl: 'https://s.libertaddigital.com/2019/08/15/estudiante-biblioteca-libros.jpg', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'},
        {name: 'Nathan Moeliono', imgUrl: 'https://rogersbh.org/application/files/thumbnails/small/2815/3632/7168/podcastblog2.jpg', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'},
        {name: 'Sincerely Brittaney', imgUrl: 'https://thispersondoesnotexist.com/image', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'},
        {name: 'Shivay Lamba', imgUrl: 'https://thispersondoesnotexist.com/image', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'},
      ]
    };
  }

  handleYup (card) {
    console.log(`Yup for ${card.name}`)
  }
  handleNope (card) {
    console.log(`Nope for ${card.name}`)
  }
  render() {
    // If you want a stack of cards instead of one-per-one view, activate stack mode
    // stack={true}
    return (
      <SwipeCards
        cards={this.state.cards}
        renderCard={(cardData) => <Card {...cardData} />}
        renderNoMoreCards={() => <NoMoreCards />}
        
        handleYup={this.handleYup}
        handleNope={this.handleNope}
      />
    )
  }
}

const styles = StyleSheet.create({
  card: {
    width: 400,
    height: 600,
    borderColor: 'grey',
    borderRadius: 20,
    backgroundColor: '#F6F5F4',
    overflow: 'hidden',
    shadowOffset: {  width: 10,  height: 10,  },
    shadowColor: 'black',
    shadowOpacity: 1.0
},
 cardText: {
    fontSize: 16
 },
 noMoreCardsText: {
    fontSize: 22,
  },
  buddyImg: {
    height: 400
  },
  cardTitle: {
    fontSize: 28,
    paddingBottom: 12
  },
  cardFooter: {
      paddingLeft: 20,
      paddingTop: 20,
      paddingRight:20
  }
})