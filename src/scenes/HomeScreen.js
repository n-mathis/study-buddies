import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Header} from 'react-native-elements';
import Iconn from 'react-native-vector-icons/MaterialCommunityIcons';
import SwipeCards from '../components/swipeCard';

class HomeScreen extends Component {
  static navigationOptions = {
    drawerIcon: ({tintColor}) => (
      <Iconn name="home" style={{fontSize: 24, color: tintColor}} />
    ),
  };
  constructor(props) {
    super(props);
    // Should replace cards data with actual backend data
    this.state = {
      user: {
        id: '1',
        name: 'Saul',
        yup: [],
        nope: [],
        matches: [],
      },
      cards: [
        {
          id: '2',
          name: 'Remi, CS50',
          imgUrl:
            'https://image.freepik.com/foto-gratis/adorable-estudiante-cabello-rizado-viste-camiseta-blanca-informal-mono-sostiene-bloc-notas-o-libro-texto_95891-107.jpg',
          description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
        },
        {
          id: '3',
          name: 'Nana Mathis',
          imgUrl:
            'https://www.arenasimulation.com/public/uploads/images/general/studentpic1.png',
          description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
        },
        {
          id: '4',
          name: 'Saul Montes De Oca',
          imgUrl:
            'https://s.libertaddigital.com/2019/08/15/estudiante-biblioteca-libros.jpg',
          description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
        },
        {
          id: '5',
          name: 'Nathan Moeliono',
          imgUrl:
            'https://rogersbh.org/application/files/thumbnails/small/2815/3632/7168/podcastblog2.jpg',
          description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
        },
        {
          id: '6',
          name: 'Sincerely Brittaney',
          imgUrl: 'https://thispersondoesnotexist.com/image',
          description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
        },
        {
          id: '7',
          name: 'Shivay Lamba',
          imgUrl: 'https://thispersondoesnotexist.com/image',
          description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
        },
      ],
    };
  }
  render() {
    //   if(this.state.yup){
    //     return(

    //     )
    // }
    return (
      <View style={styles.container}>
        <Header
          leftComponent={
            <Iconn
              name="menu"
              size={40}
              onPress={() => this.props.navigation.openDrawer()}
            />
          }
          centerComponent={<Text style={{fontSize: 36}}>Study Buddies</Text>}
        />
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <SwipeCards buddies={this.state.cards} user={this.state.user} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
