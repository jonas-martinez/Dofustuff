import React from 'react';

import { StyleSheet, View, FlatList } from 'react-native';
import { Header, SearchBar } from "react-native-elements";
import { NavigationEvents } from 'react-navigation';

import Items from "app/src/views/items/item.js";

import 'app/src/global.js';

// -----------------
// ITEM SCREEN
// -----------------

class ItemList extends React.Component {
	constructor(props) {
		super(props);

		this.searchItem = this.searchItem.bind(this);
		this.getTypeOfItems = this.getTypeOfItems.bind(this);

		this.state = {
			searchText: '',
			itemsList: this.getTypeOfItems(),
			itemModalVisible: false,
		};
	}

	static navigationOptions = {
		drawerLabel: 'Equipements',
	};

	getTypeOfItems(){
		var paramValue = this.props.navigation.getParam('itemType', 'menu');
		if(paramValue == 'coiffe'){
			return require('app/src/min/hat.json');
		} else if(paramValue == 'cape'){
			return require('app/src/min/cape.json');
		} else if(paramValue == 'cac'){
			return require('app/src/min/weapons.json');
		} else if(paramValue == 'anneau'){
			return require('app/src/min/ring.json');
		} else if(paramValue == 'familier'){
			return require('app/src/min/hat.json');
		} else if(paramValue == 'amulette'){
			return require('app/src/min/amulet.json');
		} else if(paramValue == 'bouclier'){
			return require('app/src/min/shield.json');
		} else if(paramValue == 'ceinture'){
			return require('app/src/min/belt.json');
		} else if(paramValue == 'botte'){
			return require('app/src/min/boots.json');
		} else if(paramValue == 'dofus'){
			return require('app/src/min/dofus.json');
		} else if(paramValue == 'trophee'){
			return require('app/src/min/trophy.json');
		} else {
			return require('app/src/min/hat.json');
		}
	}

	searchItem(text) {
		if(text == "*"){
			this.setState(state => ({
				itemsList: this.getTypeOfItems()
			}));
		} else {
			var temp = [];
			const itemParam = this.getTypeOfItems();

			for(i = 0; i<itemParam.length; i++) {
				var index = itemParam[i].name.search(text);
				if(index !== -1){
					temp.push(itemParam[i]);
				}
			}

			this.setState(state => ({
				itemsList: temp
			}));
		}
	}

	render() {
		return (
			<View style={styles.container}>
				<NavigationEvents
					onWillFocus={payload => {this.setState(state => ({
						itemsList: this.getTypeOfItems()
					}));
					this.refs.flatListItem.scrollToOffset({offset: 0, animated: true});
					}}
				/>
				<Header
					leftComponent={{ icon: 'arrow-back', color: '#fff', onPress: () => this.props.navigation.goBack() }}
					centerComponent={{ text: this.props.navigation.getParam("itemTypeTitle", "Objets"), style: { color: '#fff' } }}
					rightComponent={{ icon: 'home', color: '#fff', onPress: () => this.props.navigation.navigate('Accueil') }}
				/>
				<SearchBar
					lightTheme
					onChangeText={(searchText) => this.setState({searchText})}
					onClear={() => this.searchItem("*")}
					onSubmitEditing={() => this.searchItem(this.state.searchText)}
					placeholder='Rechercher...'
				/>

				<FlatList ref="flatListItem" data={this.state.itemsList} renderItem={({item}) => <Items item={item} navigation={this.props.navigation}/>} keyExtractor={(item, index) => index.toString()}/>
			</View>
		);
	}
}

export default ItemList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
