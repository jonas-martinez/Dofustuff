import React from 'react';

import { StyleSheet, Text, View, ScrollView, Image, TouchableHighlight, Modal } from 'react-native';
import { Button } from "react-native-elements";

import ItemStats from "app/src/views/items/itemStats.js";
import ItemMain from "app/src/views/items/itemMain.js";

import 'app/src/global.js';

// -----------------
// ITEM
// -----------------

class Items extends React.Component {
	constructor(props) {
		super(props);

		this.equiperItem = this.equiperItem.bind(this);
		this.comptageStats = this.comptageStats.bind(this);

		this.state = {
			itemModalVisible: false,
		};
	}

	comptageStats(stats){
		stats.forEach(function(stat){
			for(let key of Object.keys(statsObject)){
				if(stat.endsWith(key)){
					let temp = stat.match(/-?\d+/g).map(Number);
					actualStuff.stats[key] += temp[temp.length-1];
					if(key == "Vitalité"){
						actualStuff.stats["Points de vie"] += temp[temp.length-1];
					}
					break;
				}
			}
		});
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

		this.comptageStats(item.stats);

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

export default Items;

const styles = StyleSheet.create({
  item: {
    borderStyle: "solid",
    borderWidth: 6,
    borderColor: "#e8e8e8",
  },
});
