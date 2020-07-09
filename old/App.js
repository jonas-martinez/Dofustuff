import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableHighlight, TextInput, Alert, Platform, FlatList, Modal } from 'react-native';
import { Header, SearchBar, Button, Icon } from "react-native-elements";
import { createDrawerNavigator, createAppContainer, NavigationEvents } from 'react-navigation';
import CharactersImage from "./src/img/characters";

var statsObject = {
	"Points de vie": 1050,
	"PA": 7,
	"PM": 3,
	"Portée": 0,
	"Prospection": 100,
	"Initiative": 0,
	"Critique": 0,
	"Invocation": 1,
	"Soin": 0,
	"Vitalité": 0,
	"Sagesse": 0,
	"Force": 0,
	"Intelligence": 0,
	"Chance": 0,
	"Agilité": 0,
	"Puissance": 0,
	"Fuite": 0,
	"Tacle": 0,
	"Esquive PA": 0,
	"Esquive PM": 0,
	"Retrait PA": 0,
	"Retrait PM": 0,
	"Dommages Neutre": 0,
	"Dommages Terre": 0,
	"Dommages Feu": 0,
	"Dommages Eau": 0,
	"Dommages Air": 0,
	"Dommages Critique": 0,
	"Dommages Poussée": 0,
	"Dommages Mélée": 0,
	"Dommages Distance": 0,
	"Dommages d'Armes": 0,
	"Dommages aux Sorts": 0,
	"% Résistance Neutre": 0,
	"% Résistance Terre": 0,
	"% Résistance Feu": 0,
	"% Résistance Eau": 0,
	"% Résistance Air": 0,
	"Résistance Neutre": 0,
	"Résistance Terre": 0,
	"Résistance Feu": 0,
	"Résistance Eau": 0,
	"Résistance Air": 0,
	"Résistance Critique": 0,
	"Résistance Poussée": 0,
	"Dommages Piège": 0,
	"Puissance Piège": 0,
	"Renvoi Dommages": 0
};

var actualStuff = {
	amulette: null,
	coiffe: null,
	bouclier: null,
	cac: null,
	anneau1: null,
	anneau2: null,
	ceinture: null,
	cape: null,
	bottes: null,
	familier: null,
	dofus: [null, null, null, null, null, null],
	classe: null,
	sexe: 0,
	stats: statsObject,
};

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
					<TouchableHighlight underlayColor={'white'} onPress={() => {this.props.navigation.navigate('Equipements', {itemType: 'dofus'});} }>
						<Image
							style={ styles.itemLocation }
							source={require('./src/img/items/23002_0.png')}
						/>
					</TouchableHighlight>
				);
			} else {
				return(
					<TouchableHighlight underlayColor={'white'} onPress={() => {this.props.navigation.navigate('Equipements', {itemType: 'dofus'});} }>
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
			<TouchableHighlight underlayColor={'white'} onPress={() => {this.props.navigation.navigate('Equipements', {itemType: 'amulette'});} }>
				<Image
					style={ styles.itemLocation }
					source={require('./src/img/items/1229_0.png')}
				/>
			</TouchableHighlight>;
		} else {
			var amuButton =
			<TouchableHighlight underlayColor={'white'} onPress={() => {this.props.navigation.navigate('Equipements', {itemType: 'amulette'});} }>
				<Image
					style={ styles.itemLocationFilled }
					source={{uri: this.state.equipedStuff.amulette.imgPath}}
				/>
			</TouchableHighlight>;
		}

		if(this.state.equipedStuff.bouclier == null){
			var bouclierButton =
			<TouchableHighlight underlayColor={'white'} onPress={() => {this.props.navigation.navigate('Equipements', {itemType: 'bouclier'});} }>
				<Image
					style={ styles.itemLocation }
					source={require('./src/img/items/82063_0.png')}
				/>
			</TouchableHighlight>;
		} else {
			var bouclierButton =
			<TouchableHighlight underlayColor={'white'} onPress={() => {this.props.navigation.navigate('Equipements', {itemType: 'bouclier'});} }>
				<Image
					style={ styles.itemLocationFilled }
					source={{uri: this.state.equipedStuff.bouclier.imgPath}}
				/>
			</TouchableHighlight>;
		}

		if(this.state.equipedStuff.anneau1 == null){
			var anneau1Button =
			<TouchableHighlight underlayColor={'white'} onPress={() => {this.props.navigation.navigate('Equipements', {itemType: 'anneau'});} }>
				<Image
					style={ styles.itemLocation }
					source={require('./src/img/items/9211_0.png')}
				/>
			</TouchableHighlight>;
		} else {
			var anneau1Button =
			<TouchableHighlight underlayColor={'white'} onPress={() => {this.props.navigation.navigate('Equipements', {itemType: 'anneau'});} }>
				<Image
					style={ styles.itemLocationFilled }
					source={{uri: this.state.equipedStuff.anneau1.imgPath}}
				/>
			</TouchableHighlight>;
		}

		if(this.state.equipedStuff.ceinture == null){
			var ceintureButton =
			<TouchableHighlight underlayColor={'white'} onPress={() => {this.props.navigation.navigate('Equipements', {itemType: 'ceinture'});} }>
				<Image
					style={ styles.itemLocation }
					source={require('./src/img/items/10243_0.png')}
				/>
			</TouchableHighlight>;
		} else {
			var ceintureButton =
			<TouchableHighlight underlayColor={'white'} onPress={() => {this.props.navigation.navigate('Equipements', {itemType: 'ceinture'});} }>
				<Image
					style={ styles.itemLocationFilled }
					source={{uri: this.state.equipedStuff.ceinture.imgPath}}
				/>
			</TouchableHighlight>;
		}

		if(this.state.equipedStuff.bottes == null){
			var bottesButton =
			<TouchableHighlight underlayColor={'white'} onPress={() => {this.props.navigation.navigate('Equipements', {itemType: 'botte'});} }>
				<Image
					style={ styles.itemLocation }
					source={require('./src/img/items/11235_0.png')}
				/>
			</TouchableHighlight>;
		} else {
			var bottesButton =
			<TouchableHighlight underlayColor={'white'} onPress={() => {this.props.navigation.navigate('Equipements', {itemType: 'botte'});} }>
				<Image
					style={ styles.itemLocationFilled }
					source={{uri: this.state.equipedStuff.bottes.imgPath}}
				/>
			</TouchableHighlight>;
		}

		if(this.state.equipedStuff.coiffe == null){
			var coiffeButton =
			<TouchableHighlight underlayColor={'white'} onPress={() => {this.props.navigation.navigate('Equipements', {itemType: 'coiffe'});} }>
				<Image
					style={ styles.itemLocation }
					source={require('./src/img/items/16284_0.png')}
				/>
			</TouchableHighlight>;
		} else {
			var coiffeButton =
			<TouchableHighlight underlayColor={'white'} onPress={() => {this.props.navigation.navigate('Equipements', {itemType: 'coiffe'});} }>
				<Image
					style={ styles.itemLocationFilled }
					source={{uri: this.state.equipedStuff.coiffe.imgPath}}
				/>
			</TouchableHighlight>;
		}

		if(this.state.equipedStuff.cac == null){
			var cacButton =
			<TouchableHighlight underlayColor={'white'} onPress={() => {this.props.navigation.navigate('Equipements', {itemType: 'cac'});} }>
				<Image
					style={ styles.itemLocation }
					source={require('./src/img/items/7067_0.png')}
				/>
			</TouchableHighlight>;
		} else {
			var cacButton =
			<TouchableHighlight underlayColor={'white'} onPress={() => {this.props.navigation.navigate('Equipements', {itemType: 'cac'});} }>
				<Image
					style={ styles.itemLocationFilled }
					source={{uri: this.state.equipedStuff.cac.imgPath}}
				/>
			</TouchableHighlight>;
		}

		if(this.state.equipedStuff.anneau2 == null){
			var anneau2Button =
			<TouchableHighlight underlayColor={'white'} onPress={() => {this.props.navigation.navigate('Equipements', {itemType: 'anneau'});} }>
				<Image
					style={ styles.itemLocation }
					source={require('./src/img/items/9211_0.png')}
				/>
			</TouchableHighlight>;
		} else {
			var anneau2Button =
			<TouchableHighlight underlayColor={'white'} onPress={() => {this.props.navigation.navigate('Equipements', {itemType: 'anneau'});} }>
				<Image
					style={ styles.itemLocationFilled }
					source={{uri: this.state.equipedStuff.anneau2.imgPath}}
				/>
			</TouchableHighlight>;
		}

		//TODO : defaultSource={require("placeholder_image_path")}

		if(this.state.equipedStuff.cape == null){
			var capeButton =
			<TouchableHighlight underlayColor={'white'} onPress={() => {this.props.navigation.navigate('Equipements', {itemType: 'cape'});} }>
				<Image
					style={ styles.itemLocation }
					source={require('./src/img/items/17291_0.png')}
				/>
			</TouchableHighlight>;
		} else {
			var capeButton =
			<TouchableHighlight underlayColor={'white'} onPress={() => {this.props.navigation.navigate('Equipements', {itemType: 'cape'});} }>
				<Image
					style={ styles.itemLocationFilled }
					source={{uri: this.state.equipedStuff.cape.imgPath}}
				/>
			</TouchableHighlight>;
		}

		if(this.state.equipedStuff.familier == null){
			var familierButton =
			<TouchableHighlight underlayColor={'white'} onPress={() => {this.props.navigation.navigate('Equipements', {itemType: 'familier'});} }>
				<Image
					style={ styles.itemLocation }
					source={require('./src/img/items/18094_0.png')}
				/>
			</TouchableHighlight>;
		} else {
			var familierButton =
			<TouchableHighlight underlayColor={'white'} onPress={() => {this.props.navigation.navigate('Equipements', {itemType: 'familier'});} }>
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
					source={require('./src/img/characters/0-0.png')}
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

class CharacterStats extends React.Component {
	constructor(props){
		super(props);

		this.calculStats = this.calculStats.bind(this);
	}

	calculStats(){
		// Parcourir les items du stuff actuel
		// Pour chaque item parcourir ses stats
		// Pour chaque stat, trouver la stat correspondante dans actualStuff.stats
	}

	render(){
		return(
			<View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 10}}>
				<View style={{flexDirection: 'column', marginRight: 10}}>
					<Text style={styles.statValue}>{actualStuff.stats["Points de vie"]}</Text>
					<Text style={styles.statValue}>{actualStuff.stats["PA"]}</Text>
					<Text style={styles.statValue}>{actualStuff.stats["PM"]}</Text>
					<Text style={styles.statValue}>{actualStuff.stats["Portée"]}</Text>
					<Text style={styles.statValue}>{actualStuff.stats["Prospection"]}</Text>
					<Text style={styles.statValue}>{actualStuff.stats["Initiative"]}</Text>
					<Text style={styles.statValue}>{actualStuff.stats["Critique"]}</Text>
					<Text style={styles.statValue}>{actualStuff.stats["Invocation"]}</Text>
					<Text style={styles.statValue}>{actualStuff.stats["Soin"]}</Text>
				</View>

				<View style={{flexDirection: 'column', marginRight: 10}}>
					<Image source={require('./src/img/caracs/vitality.png')} style={styles.statImage}/>
					<Image source={require('./src/img/caracs/ap.png')} style={styles.statImage}/>
					<Image source={require('./src/img/caracs/mp.png')} style={styles.statImage}/>
					<Image source={require('./src/img/caracs/range.png')} style={styles.statImage}/>
					<Image source={require('./src/img/caracs/prospecting.png')} style={styles.statImage}/>
					<Image source={require('./src/img/caracs/initiative.png')} style={styles.statImage}/>
					<Image source={require('./src/img/caracs/critical_hits.png')} style={styles.statImage}/>
					<Image source={require('./src/img/caracs/summons.png')} style={styles.statImage}/>
					<Image source={require('./src/img/caracs/heals.png')} style={styles.statImage}/>
				</View>

				<View style={{flexDirection: 'column'}}>
					<Text style={styles.statName}>Points de vie</Text>
					<Text style={styles.statName}>PA</Text>
					<Text style={styles.statName}>PM</Text>
					<Text style={styles.statName}>Portée</Text>
					<Text style={styles.statName}>Prospection</Text>
					<Text style={styles.statName}>Initiative</Text>
					<Text style={styles.statName}>Critique</Text>
					<Text style={styles.statName}>Invocation</Text>
					<Text style={styles.statName}>Soin</Text>
				</View>
			</View>
		);
	}
}

// -----------------
// HOME SCREEN
// -----------------

class HomeScreen extends React.Component {
	static navigationOptions = {
		drawerLabel: 'Accueil',
	};

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

// -----------------
// ITEM SCREEN
// -----------------

class ItemScreen extends React.Component {
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
		if(paramValue == 'menu'){
			return require('./src/min/hat.json');
		} else if(paramValue == 'coiffe'){
			return require('./src/min/hat.json');
		} else if(paramValue == 'cape'){
			return require('./src/min/cape.json');
		} else if(paramValue == 'cac'){
			return require('./src/min/weapons.json');
		} else if(paramValue == 'anneau'){
			return require('./src/min/ring.json');
		} else if(paramValue == 'familier'){
			return require('./src/min/hat.json');
		} else if(paramValue == 'amulette'){
			return require('./src/min/amulet.json');
		} else if(paramValue == 'bouclier'){
			return require('./src/min/shield.json');
		} else if(paramValue == 'ceinture'){
			return require('./src/min/belt.json');
		} else if(paramValue == 'botte'){
			return require('./src/min/boots.json');
		} else if(paramValue == 'dofus'){
			return require('./src/min/dofus.json');
		} else if(paramValue == 'trophee'){
			return require('./src/min/trophy.json');
		} else {
			return require('./src/min/hat.json');
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
					leftComponent={{ icon: 'menu', color: '#fff', onPress: () => this.props.navigation.openDrawer() }}
					centerComponent={{ text: 'Equipements', style: { color: '#fff' } }}
					rightComponent={{ icon: 'home', color: '#fff', onPress: () => this.props.navigation.navigate('Accueil') }}
				/>
				<SearchBar
					lightTheme
					onChangeText={(searchText) => this.setState({searchText})}
					onClear={() => this.searchItem("*")}
					onSubmitEditing={() => this.searchItem(this.state.searchText)}
					placeholder='Rechercher...'
				/>

				<FlatList ref="flatListItem" data={this.state.itemsList} renderItem={({item}) => <Items item={item} navigation={this.props.navigation}/>} />
			</View>
		);
	}
}

class Items extends React.Component {
	constructor(props) {
		super(props);

		this.equiperItem = this.equiperItem.bind(this);

		this.state = {
			itemModalVisible: false,
		};
	}

	equiperItem(item){
		if(item.type == "Chapeau"){
			actualStuff.coiffe = item;
		} else if(item.type == "Cape" || item.type == "Sac à dos"){
			actualStuff.cape = item;
		} else if(item.type == "Amulette"){
			actualStuff.amulette = item;
		} else if(item.type == "Ceinture"){
			actualStuff.ceinture = item;
		} else if(item.type == "Bottes"){
			actualStuff.bottes = item;
		} else if(item.type == "Dofus" || item.type == "Trophée"){
			for(i=0; i<6; i++){
				if(actualStuff.dofus[i] == null){
					actualStuff.dofus[i] = item;
					break;
				}
			}
			// TODO : FAIRE UN ELSE SI JAMAIS LES EMPLACEMENTS SONT FULL POUR PROPOSER DE REMPLACER
		} else if(item.type == "Anneau"){
			if(actualStuff.anneau1 == null){
				actualStuff.anneau1 = item;
			} else if(actualStuff.anneau2 == null){
				actualStuff.anneau2 = item;
			} // TODO : FAIRE UN ELSE SI JAMAIS LES EMPLACEMENTS SONT FULL POUR PROPOSER DE REMPLACER
		} else if(item.type == "Bouclier"){
			actualStuff.bouclier = item;
		} else if(["Marteau", "Pelle", "Faux", "Baguette", "Arc", "Épée", "Hache", "Dague" , "Bâton"].indexOf(item.type) > -1){
			actualStuff.cac = item;
		} else {
			// TODO : ERREUR
		}

		this.props.navigation.navigate('Personnage');
	}

	render() {
		return (
			<View>
				<Modal
					animationType="fade"
					transparent={true}
					visible={this.state.itemModalVisible}
					onRequestClose={() => {
						this.setState({itemModalVisible: false});
					}}>
					<View style={{backgroundColor: 'rgba(0, 0, 0, 0.5)', flex: 1, justifyContent: 'center'}}>
						<View style={{flex: 1, backgroundColor: 'white', margin: 40, alignItems: 'center', borderRadius: 10}}>
							<Text style={{fontSize: 20, marginTop: 10}}>{this.props.item.name}</Text>

							<Image
								style={{width:100, height:100, justifyContent: 'flex-end'}}
								source={{uri : this.props.item.imgPath}}
							/>

							<View maxHeight="50%">
								<ScrollView flexGrow={0} style={{textAlign: 'left'}}>
									<ItemStats itemStats={this.props.item.stats} />
								</ScrollView>

								<Button
									buttonStyle={{marginTop: 10}}
									title='Recette'
								/>
							</View>

							<View style={{flex: 1, flexDirection: 'row', position: 'absolute', bottom: 10, justifyContent: 'space-between', width: "90%"}}>
								<Button
									buttonStyle={{backgroundColor: 'green'}}
									title='Equiper'
									onPress={() => {
										this.setState({itemModalVisible: false});
										this.equiperItem(this.props.item);
									}}
								/>
								<Button
									buttonStyle={{backgroundColor: 'red'}}
									title='Retour'
									onPress={() => this.setState({itemModalVisible: false})}
								/>
							</View>
						</View>
					</View>
				</Modal>

				<TouchableHighlight  onPress={() => this.setState({itemModalVisible: true})}>
					<View key={this.props.item.id} style={ styles.item }>
						<ItemMain item={ this.props.item } />
						<View style={{marginLeft: 20}}>
							<ItemStats itemStats={this.props.item.stats}/>
						</View>
					</View>
				</TouchableHighlight>
			</View>
		);
	}
}

class ItemStats extends React.Component {
	render() {
		var statsList = this.props.itemStats.map(function(stat) {
			return (
				<Text>{stat}</Text>
			);
		});

		return statsList;
	}
}

class ItemMain extends React.Component {
	render() {
		return(
			<View style={ styles.itemMain }>
				<Image
					style={{width:50, height:50, justifyContent: 'flex-end'}}
					source={{uri : this.props.item.imgPath}}
				/>
				<Text style={{justifyContent: 'flex-start'}}>{this.props.item.name}</Text>
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
  title: {
    backgroundColor: "gray",
    alignItems: "center",
  },
  titleText: {
    fontSize: 20,
  },
  item: {
    borderStyle: "solid",
    borderWidth: 6,
    borderColor: "#e8e8e8",
  },
  itemMain: {
  	flexDirection: 'row',
  },
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
	statValue: {
		textAlign: 'right',
		marginBottom: 10,
	},
	statImage: {
		marginBottom: 9,
		width: 20,
		height: 20,
	},
	statName: {
		marginBottom: 10,
	}
});
