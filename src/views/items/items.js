import React from 'react';

import { StyleSheet, View, TouchableHighlight, Image, ScrollView } from 'react-native';
import { Header } from "react-native-elements";
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Items from "app/src/views/items/item.js";
import ItemList from "app/src/views/items/itemList.js";

import 'app/src/global.js';

// -----------------
// ITEM SCREEN
// -----------------

class ItemScreen extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			itemModalVisible: false,
		};
	}

	render() {
		return (
			<View style={styles.container}>
				<Header
					leftComponent={{ icon: 'menu', color: '#fff', onPress: () => this.props.navigation.openDrawer() }}
					centerComponent={{ text: 'Equipements', style: { color: '#fff' } }}
					rightComponent={{ icon: 'home', color: '#fff', onPress: () => this.props.navigation.navigate('Accueil') }}
				/>

				<ScrollView style={styles.container}>

					<View style={{alignItems: 'center', justifyContent: 'center', marginTop: 20}}>
						<TouchableHighlight underlayColor={'white'} onPress={() => {this.props.navigation.navigate('ItemList', {itemType: 'coiffe', itemTypeTitle: 'Coiffes'});} }>
							<Image
								style={ styles.itemLocation }
								source={require('app/src/img/items/16284_0.png')}
							/>
						</TouchableHighlight>

						<TouchableHighlight underlayColor={'white'} onPress={() => {this.props.navigation.navigate('ItemList', {itemType: 'amulette', itemTypeTitle: 'Amulettes'});} }>
							<Image
								style={ styles.itemLocation }
								source={require('app/src/img/items/1229_0.png')}
							/>
						</TouchableHighlight>

						<TouchableHighlight underlayColor={'white'} onPress={() => {this.props.navigation.navigate('ItemList', {itemType: 'cape', itemTypeTitle: 'Capes'});} }>
							<Image
								style={ styles.itemLocation }
								source={require('app/src/img/items/17291_0.png')}
							/>
						</TouchableHighlight>

						<TouchableHighlight underlayColor={'white'} onPress={() => {this.props.navigation.navigate('ItemList', {itemType: 'cac', itemTypeTitle: 'Corps à corps'});} }>
							<Image
								style={ styles.itemLocation }
								source={require('app/src/img/items/7067_0.png')}
							/>
						</TouchableHighlight>

						<TouchableHighlight underlayColor={'white'} onPress={() => {this.props.navigation.navigate('ItemList', {itemType: 'anneau', itemTypeTitle: 'Anneaux'});} }>
							<Image
								style={ styles.itemLocation }
								source={require('app/src/img/items/9211_0.png')}
							/>
						</TouchableHighlight>

						<TouchableHighlight underlayColor={'white'} onPress={() => {this.props.navigation.navigate('ItemList', {itemType: 'ceinture', itemTypeTitle: 'Ceintures'});} }>
							<Image
								style={ styles.itemLocation }
								source={require('app/src/img/items/10243_0.png')}
							/>
						</TouchableHighlight>

						<TouchableHighlight underlayColor={'white'} onPress={() => {this.props.navigation.navigate('ItemList', {itemType: 'botte', itemTypeTitle: 'Bottes'});} }>
							<Image
								style={ styles.itemLocation }
								source={require('app/src/img/items/11235_0.png')}
							/>
						</TouchableHighlight>

						<TouchableHighlight underlayColor={'white'} onPress={() => {this.props.navigation.navigate('ItemList', {itemType: 'familier', itemTypeTitle: 'Animaux'});} }>
							<Image
								style={ styles.itemLocation }
								source={require('app/src/img/items/18094_0.png')}
							/>
						</TouchableHighlight>

						<TouchableHighlight underlayColor={'white'} onPress={() => {this.props.navigation.navigate('ItemList', {itemType: 'bouclier', itemTypeTitle: 'Boucliers'});} }>
							<Image
								style={ styles.itemLocation }
								source={require('app/src/img/items/82063_0.png')}
							/>
						</TouchableHighlight>

						<TouchableHighlight underlayColor={'white'} onPress={() => {this.props.navigation.navigate('ItemList', {itemType: 'dofus', itemTypeTitle: 'Dofus'});} }>
							<Image
								style={ styles.itemLocation }
								source={require('app/src/img/items/23002_0.png')}
							/>
						</TouchableHighlight>
					</View>
				</ScrollView>
			</View>
		);
	}
}

//export default ItemScreen;

const itemStack = createStackNavigator(
	{
		ItemScreen: {
			screen: ItemScreen,
			navigationOptions: {
				header: null,
			},
		},
		ItemList: {
			screen: ItemList,
			navigationOptions: {
				header: null,
			},
		},
	}
);

export default createAppContainer(itemStack);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
