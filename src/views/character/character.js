import React from 'react';

import { View, ScrollView} from 'react-native';
import { Header} from "react-native-elements";

import CharacterStuff from "app/src/views/character/characterStuff.js";
import CharacterStats from "app/src/views/character/characterStats.js";

import 'app/src/global.js';

// -----------------
// CHARACTER SCREEN
// -----------------

class CharacterScreen extends React.Component {
	static navigationOptions = {
		drawerLabel: 'Personnage',
	};

	render() {
		return (
			<View style={{flex: 1}}>
				<Header
					leftComponent={{ icon: 'menu', color: '#fff', onPress: () => this.props.navigation.openDrawer() }}
					centerComponent={{ text: 'Personnage', style: { color: '#fff' } }}
					rightComponent={{ icon: 'home', color: '#fff', onPress: () => this.props.navigation.navigate('Accueil') }}
				/>
				<ScrollView>
					<CharacterStuff navigation={this.props.navigation}/>
					<CharacterStats />
				</ScrollView>
			</View>
		);
	}
}

export default CharacterScreen;
