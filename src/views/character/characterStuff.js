import React from 'react';

import { StyleSheet, Text, View, ScrollView, Image, TouchableHighlight, Modal } from 'react-native';
import { Button } from "react-native-elements";
import { NavigationEvents } from 'react-navigation';

import CharactersImage from "app/src/img/characters";

// -----------------
// CHARACTER STUFF
// -----------------

class CharacterStuff extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			equipedStuff: actualStuff,
			itemModalVisible: false,
		};

		this.createClassButtons = this.createClassButtons.bind(this);
		this.createDofusButtons = this.createDofusButtons.bind(this);
	}

	createClassButtons(){
		const result = Object.keys(CharactersImage).map(key =>
			<TouchableHighlight
				key={key}
				onPress={() => {actualStuff.classe = key;
				this.setState({itemModalVisible: false, equipedStuff: actualStuff});}}>
				<Image
					source={CharactersImage[key][this.state.equipedStuff.sexe]}
				/>
			</TouchableHighlight>
		);

		return result;
	}

	createDofusButtons(){
		return this.state.equipedStuff.dofus.map(function(key, i){
			if(this.state.equipedStuff.dofus[i] == null){
				return(
					<TouchableHighlight key={i} underlayColor={'white'} onPress={() => {this.props.navigation.navigate('ItemList', {itemType: 'dofus', itemTypeTitle: 'Dofus'});} }>
						<Image
							style={ styles.itemLocation }
							source={require('app/src/img/items/23002_0.png')}
						/>
					</TouchableHighlight>
				);
			} else {
				return(
					<TouchableHighlight key={i} underlayColor={'white'} onPress={() => {this.props.navigation.navigate('ItemList', {itemType: 'dofus', itemTypeTitle: 'Dofus'});} }>
						<Image
							style={ styles.itemLocationFilled }
							source={{uri: this.state.equipedStuff.dofus[i].imgPath}}
						/>
					</TouchableHighlight>
				);
			}
		}, this);
	}

	render() {
		if(this.state.equipedStuff.amulette == null){
			var amuButton =
			<TouchableHighlight underlayColor={'white'} onPress={() => {this.props.navigation.navigate('ItemList', {itemType: 'amulette', itemTypeTitle: 'Amulettes'});} }>
				<Image
					style={ styles.itemLocation }
					source={require('app/src/img/items/1229_0.png')}
				/>
			</TouchableHighlight>;
		} else {
			var amuButton =
			<TouchableHighlight underlayColor={'white'} onPress={() => {this.props.navigation.navigate('ItemList', {itemType: 'amulette', itemTypeTitle: 'Amulettes'});} }>
				<Image
					style={ styles.itemLocationFilled }
					source={{uri: this.state.equipedStuff.amulette.imgPath}}
				/>
			</TouchableHighlight>;
		}

		if(this.state.equipedStuff.bouclier == null){
			var bouclierButton =
			<TouchableHighlight underlayColor={'white'} onPress={() => {this.props.navigation.navigate('ItemList', {itemType: 'bouclier', itemTypeTitle: 'Boucliers'});} }>
				<Image
					style={ styles.itemLocation }
					source={require('app/src/img/items/82063_0.png')}
				/>
			</TouchableHighlight>;
		} else {
			var bouclierButton =
			<TouchableHighlight underlayColor={'white'} onPress={() => {this.props.navigation.navigate('ItemList', {itemType: 'bouclier', itemTypeTitle: 'Boucliers'});} }>
				<Image
					style={ styles.itemLocationFilled }
					source={{uri: this.state.equipedStuff.bouclier.imgPath}}
				/>
			</TouchableHighlight>;
		}

		if(this.state.equipedStuff.anneau1 == null){
			var anneau1Button =
			<TouchableHighlight underlayColor={'white'} onPress={() => {this.props.navigation.navigate('ItemList', {itemType: 'anneau', itemTypeTitle: 'Anneaux'});} }>
				<Image
					style={ styles.itemLocation }
					source={require('app/src/img/items/9211_0.png')}
				/>
			</TouchableHighlight>;
		} else {
			var anneau1Button =
			<TouchableHighlight underlayColor={'white'} onPress={() => {this.props.navigation.navigate('ItemList', {itemType: 'anneau', itemTypeTitle: 'Anneaux'});} }>
				<Image
					style={ styles.itemLocationFilled }
					source={{uri: this.state.equipedStuff.anneau1.imgPath}}
				/>
			</TouchableHighlight>;
		}

		if(this.state.equipedStuff.ceinture == null){
			var ceintureButton =
			<TouchableHighlight underlayColor={'white'} onPress={() => {this.props.navigation.navigate('ItemList', {itemType: 'ceinture', itemTypeTitle: 'Ceintures'});} }>
				<Image
					style={ styles.itemLocation }
					source={require('app/src/img/items/10243_0.png')}
				/>
			</TouchableHighlight>;
		} else {
			var ceintureButton =
			<TouchableHighlight underlayColor={'white'} onPress={() => {this.props.navigation.navigate('ItemList', {itemType: 'ceinture', itemTypeTitle: 'Ceintures'});} }>
				<Image
					style={ styles.itemLocationFilled }
					source={{uri: this.state.equipedStuff.ceinture.imgPath}}
				/>
			</TouchableHighlight>;
		}

		if(this.state.equipedStuff.bottes == null){
			var bottesButton =
			<TouchableHighlight underlayColor={'white'} onPress={() => {this.props.navigation.navigate('ItemList', {itemType: 'botte', itemTypeTitle: 'Bottes'});} }>
				<Image
					style={ styles.itemLocation }
					source={require('app/src/img/items/11235_0.png')}
				/>
			</TouchableHighlight>;
		} else {
			var bottesButton =
			<TouchableHighlight underlayColor={'white'} onPress={() => {this.props.navigation.navigate('ItemList', {itemType: 'botte', itemTypeTitle: 'Bottes'});} }>
				<Image
					style={ styles.itemLocationFilled }
					source={{uri: this.state.equipedStuff.bottes.imgPath}}
				/>
			</TouchableHighlight>;
		}

		if(this.state.equipedStuff.coiffe == null){
			var coiffeButton =
			<TouchableHighlight underlayColor={'white'} onPress={() => {this.props.navigation.navigate('ItemList', {itemType: 'coiffe', itemTypeTitle: 'Coiffes'});} }>
				<Image
					style={ styles.itemLocation }
					source={require('app/src/img/items/16284_0.png')}
				/>
			</TouchableHighlight>;
		} else {
			var coiffeButton =
			<TouchableHighlight underlayColor={'white'} onPress={() => {this.props.navigation.navigate('ItemList', {itemType: 'coiffe', itemTypeTitle: 'Coiffes'});} }>
				<Image
					style={ styles.itemLocationFilled }
					source={{uri: this.state.equipedStuff.coiffe.imgPath}}
				/>
			</TouchableHighlight>;
		}

		if(this.state.equipedStuff.cac == null){
			var cacButton =
			<TouchableHighlight underlayColor={'white'} onPress={() => {this.props.navigation.navigate('ItemList', {itemType: 'cac', itemTypeTitle: 'Corps à corps'});} }>
				<Image
					style={ styles.itemLocation }
					source={require('app/src/img/items/7067_0.png')}
				/>
			</TouchableHighlight>;
		} else {
			var cacButton =
			<TouchableHighlight underlayColor={'white'} onPress={() => {this.props.navigation.navigate('ItemList', {itemType: 'cac', itemTypeTitle: 'Corps à corps'});} }>
				<Image
					style={ styles.itemLocationFilled }
					source={{uri: this.state.equipedStuff.cac.imgPath}}
				/>
			</TouchableHighlight>;
		}

		if(this.state.equipedStuff.anneau2 == null){
			var anneau2Button =
			<TouchableHighlight underlayColor={'white'} onPress={() => {this.props.navigation.navigate('ItemList', {itemType: 'anneau', itemTypeTitle: 'Anneaux'});} }>
				<Image
					style={ styles.itemLocation }
					source={require('app/src/img/items/9211_0.png')}
				/>
			</TouchableHighlight>;
		} else {
			var anneau2Button =
			<TouchableHighlight underlayColor={'white'} onPress={() => {this.props.navigation.navigate('ItemList', {itemType: 'anneau', itemTypeTitle: 'Anneaux'});} }>
				<Image
					style={ styles.itemLocationFilled }
					source={{uri: this.state.equipedStuff.anneau2.imgPath}}
				/>
			</TouchableHighlight>;
		}

		//TODO : defaultSource={require("placeholder_image_path")}

		if(this.state.equipedStuff.cape == null){
			var capeButton =
			<TouchableHighlight underlayColor={'white'} onPress={() => {this.props.navigation.navigate('ItemList', {itemType: 'cape', itemTypeTitle: 'Capes'});} }>
				<Image
					style={ styles.itemLocation }
					source={require('app/src/img/items/17291_0.png')}
				/>
			</TouchableHighlight>;
		} else {
			var capeButton =
			<TouchableHighlight underlayColor={'white'} onPress={() => {this.props.navigation.navigate('ItemList', {itemType: 'cape', itemTypeTitle: 'Capes'});} }>
				<Image
					style={ styles.itemLocationFilled }
					source={{uri: this.state.equipedStuff.cape.imgPath}}
				/>
			</TouchableHighlight>;
		}

		if(this.state.equipedStuff.familier == null){
			var familierButton =
			<TouchableHighlight underlayColor={'white'} onPress={() => {this.props.navigation.navigate('ItemList', {itemType: 'familier', itemTypeTitle: 'Animaux'});} }>
				<Image
					style={ styles.itemLocation }
					source={require('app/src/img/items/18094_0.png')}
				/>
			</TouchableHighlight>;
		} else {
			var familierButton =
			<TouchableHighlight underlayColor={'white'} onPress={() => {this.props.navigation.navigate('ItemList', {itemType: 'familier', itemTypeTitle: 'Animaux'});} }>
				<Image
					style={ styles.itemLocationFilled }
					source={{uri: this.state.equipedStuff.familier.imgPath}}
				/>
			</TouchableHighlight>;
		}

		if(this.state.equipedStuff.classe == null){
			var classeButton =
			<TouchableHighlight style={{flex: 2, alignItems: 'center', justifyContent: 'center'}} underlayColor={'white'} onPress={() => this.setState({itemModalVisible: true})}>
				<Image
					style={{backgroundColor: 'transparent'}}
					source={require('app/src/img/characters/0-0.png')}
				/>
			</TouchableHighlight>;
		} else {
			var classeButton =
			<TouchableHighlight style={{flex: 2, alignItems: 'center', justifyContent: 'center'}} underlayColor={'white'} onPress={() => this.setState({itemModalVisible: true})}>
				<Image
					style={{backgroundColor: 'transparent'}}
					source={CharactersImage[this.state.equipedStuff.classe][this.state.equipedStuff.sexe]}
				/>
			</TouchableHighlight>;
		}

		return (
			<View style={{flex:1, flexDirection: 'column', marginTop: 30}}>
				<NavigationEvents
					onWillFocus={payload => {this.setState(state => ({
						equipedStuff: actualStuff
					}));}}
				/>
				<View style={{flexDirection: 'row', marginBottom: 30}}>
					<View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-between', marginLeft: 5}}>
						{amuButton}
						{bouclierButton}
						{anneau1Button}
						{ceintureButton}
						{bottesButton}
					</View>

					{classeButton}

					<Modal
						animationType="fade"
						transparent={true}
						visible={this.state.itemModalVisible}
						onRequestClose={() => {
							this.setState({itemModalVisible: false});
						}}>
						<View style={{backgroundColor: 'rgba(0, 0, 0, 0.5)', flex: 1, justifyContent: 'center'}}>
							<View style={{flex: 1, backgroundColor: 'white', margin: 40, alignItems: 'center', borderRadius: 10}}>
								<Text style={{fontSize: 20, marginTop: 10}}>Classe</Text>

								<View style={{flexDirection: 'row'}}>
									<Button title="male" onPress={() => { actualStuff.sexe = 0;
										this.setState({equipedStuff: actualStuff})}}/>
									<Button title="female" onPress={() => { actualStuff.sexe = 1;
										this.setState({equipedStuff: actualStuff})}}/>
								</View>

								<View maxHeight="70%">
									<ScrollView contentContainerStyle={{alignItems: 'center'}}>
										{this.createClassButtons()}
									</ScrollView>
								</View>

								<View style={{flex: 1, flexDirection: 'row', position: 'absolute', bottom: 10, width: "90%"}}>
									<Button
										buttonStyle={{backgroundColor: 'red'}}
										title='Retour'
										onPress={() => this.setState({itemModalVisible: false})}
									/>
								</View>
							</View>
						</View>
					</Modal>

					<View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-between', marginRight: 5, alignItems: 'flex-end'}}>
						{coiffeButton}
						{cacButton}
						{anneau2Button}
						{capeButton}
						{familierButton}
					</View>
				</View>

				<View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginLeft: 5, marginRight: 5}}>
					{this.createDofusButtons()}
				</View>
			</View>
		);
	}
}

export default CharacterStuff;

const styles = StyleSheet.create({
	itemLocation: {
		borderWidth: 1,
		borderColor: "#000",
		width: 50,
		height: 50,
		tintColor: 'gray',
	},
	itemLocationFilled: {
		borderWidth: 1,
		borderColor: "#000",
		width: 50,
		height: 50,
	},
});
