import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Header, Button } from "react-native-elements";
import { createDrawerNavigator, createAppContainer } from 'react-navigation';
import CharactersImage from "app/src/img/characters";

import CharacterScreen from "app/src/views/character/character.js";

import ItemScreen from "app/src/views/items/items.js";

import 'app/src/global.js';

// -----------------
// HOME SCREEN
// -----------------

class HomeScreen extends React.Component {
	static navigationOptions = {
		drawerLabel: 'Accueil',
	};

	componentDidMount = async() => {

	}
	

	render() {
		return (
			<View style={styles.container}>
				<Header
					leftComponent={{ icon: 'menu', color: '#fff', onPress: () => this.props.navigation.openDrawer() }}
					centerComponent={{ text: 'DofusBookMobile', style: { color: '#fff' } }}
				/>

				<View>
					<Button
						title="Equipements"
						color="#16e573"
						onPress={() => this.props.navigation.navigate('Equipements')}
					/>

					<Button
						title="Personnage"
						color="#16e573"
						onPress={() => this.props.navigation.navigate('Personnage')}
					/>
				</View>
			</View>
		);
	}
}

const AppNavigator = createDrawerNavigator({
  Accueil: {
    screen: HomeScreen,
  },
	Equipements: {
		screen: ItemScreen
	},
	Personnage: {
		screen: CharacterScreen
	},
});

export default createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
