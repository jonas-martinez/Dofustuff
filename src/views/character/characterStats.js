import React from 'react';

import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationEvents } from 'react-navigation';

import 'app/src/global.js';

// -----------------
// CHARACTER STATS
// -----------------

class CharacterStats extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			equipedStuff: actualStuff,
		};
	}

	render(){
		return(
			<View>
				<NavigationEvents
					onWillFocus={payload => {this.setState(state => ({
						equipedStuff: actualStuff
					}));}}
				/>

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

						<Text style={styles.statValue}>{actualStuff.stats["Sagesse"]}</Text>
						<Text style={styles.statValue}>{actualStuff.stats["Force"]}</Text>
						<Text style={styles.statValue}>{actualStuff.stats["Intelligence"]}</Text>
						<Text style={styles.statValue}>{actualStuff.stats["Chance"]}</Text>
						<Text style={styles.statValue}>{actualStuff.stats["Agilité"]}</Text>
						<Text style={styles.statValue}>{actualStuff.stats["Puissance"]}</Text>
						<Text style={styles.statValue}>{actualStuff.stats["Fuite"]}</Text>
						<Text style={styles.statValue}>{actualStuff.stats["Tacle"]}</Text>
						<Text style={styles.statValue}>{actualStuff.stats["Esquive PA"]}</Text>
						<Text style={styles.statValue}>{actualStuff.stats["Esquive PM"]}</Text>
						<Text style={styles.statValue}>{actualStuff.stats["Retrait PA"]}</Text>
						<Text style={styles.statValue}>{actualStuff.stats["Retrait PM"]}</Text>

						<Text style={styles.statValue}>{actualStuff.stats["Dommages Neutre"]}</Text>
						<Text style={styles.statValue}>{actualStuff.stats["Dommages Terre"]}</Text>
						<Text style={styles.statValue}>{actualStuff.stats["Dommages Feu"]}</Text>
						<Text style={styles.statValue}>{actualStuff.stats["Dommages Eau"]}</Text>
						<Text style={styles.statValue}>{actualStuff.stats["Dommages Air"]}</Text>
						<Text style={styles.statValue}>{actualStuff.stats["Dommages Critique"]}</Text>
						<Text style={styles.statValue}>{actualStuff.stats["Dommages Poussée"]}</Text>
						<Text style={styles.statValue}>{actualStuff.stats["Dommages Mélée"]}%</Text>
						<Text style={styles.statValue}>{actualStuff.stats["Dommages Distance"]}%</Text>
						<Text style={styles.statValue}>{actualStuff.stats["Dommages d'Armes"]}%</Text>
						<Text style={styles.statValue}>{actualStuff.stats["Dommages aux Sorts"]}%</Text>

						<Text style={styles.statValue}>{actualStuff.stats["% Résistance Neutre"]}%</Text>
						<Text style={styles.statValue}>{actualStuff.stats["% Résistance Terre"]}%</Text>
						<Text style={styles.statValue}>{actualStuff.stats["% Résistance Feu"]}%</Text>
						<Text style={styles.statValue}>{actualStuff.stats["% Résistance Eau"]}%</Text>
						<Text style={styles.statValue}>{actualStuff.stats["% Résistance Air"]}%</Text>
						<Text style={styles.statValue}>{actualStuff.stats["Résistance Critique"]}</Text>
						<Text style={styles.statValue}>{actualStuff.stats["Résistance Poussée"]}</Text>
						<Text style={styles.statValue}>{actualStuff.stats["Résistance Mélée"]}%</Text>
						<Text style={styles.statValue}>{actualStuff.stats["Résistance Distance"]}%</Text>
						<Text style={styles.statValue}>{actualStuff.stats["Résistance d'Armes"]}%</Text>
						<Text style={styles.statValue}>{actualStuff.stats["Résistance aux Sorts"]}%</Text>
					</View>

					<View style={{flexDirection: 'column', marginRight: 10}}>
						<Image source={require('app/src/img/caracs/vitality.png')} style={styles.statImage}/>
						<Image source={require('app/src/img/caracs/ap.png')} style={styles.statImage}/>
						<Image source={require('app/src/img/caracs/mp.png')} style={styles.statImage}/>
						<Image source={require('app/src/img/caracs/range.png')} style={styles.statImage}/>
						<Image source={require('app/src/img/caracs/prospecting.png')} style={styles.statImage}/>
						<Image source={require('app/src/img/caracs/initiative.png')} style={styles.statImage}/>
						<Image source={require('app/src/img/caracs/critical_hits.png')} style={styles.statImage}/>
						<Image source={require('app/src/img/caracs/summons.png')} style={styles.statImage}/>
						<Image source={require('app/src/img/caracs/heals.png')} style={styles.statImage}/>

						<Image source={require('app/src/img/caracs/wisdom.png')} style={styles.statImage}/>
						<Image source={require('app/src/img/caracs/strength.png')} style={styles.statImage}/>
						<Image source={require('app/src/img/caracs/intelligence.png')} style={styles.statImage}/>
						<Image source={require('app/src/img/caracs/chance.png')} style={styles.statImage}/>
						<Image source={require('app/src/img/caracs/agility.png')} style={styles.statImage}/>
						<Image source={require('app/src/img/caracs/power.png')} style={styles.statImage}/>
						<Image source={require('app/src/img/caracs/dodge.png')} style={styles.statImage}/>
						<Image source={require('app/src/img/caracs/lock.png')} style={styles.statImage}/>
						<Image source={require('app/src/img/caracs/ap_resistance.png')} style={styles.statImage}/>
						<Image source={require('app/src/img/caracs/mp_resistance.png')} style={styles.statImage}/>
						<Image source={require('app/src/img/caracs/ap_reduction.png')} style={styles.statImage}/>
						<Image source={require('app/src/img/caracs/mp_reduction.png')} style={styles.statImage}/>

						<Image source={require('app/src/img/caracs/neutral_damage.png')} style={styles.statImage}/>
						<Image source={require('app/src/img/caracs/earth_damage.png')} style={styles.statImage}/>
						<Image source={require('app/src/img/caracs/fire_damage.png')} style={styles.statImage}/>
						<Image source={require('app/src/img/caracs/water_damage.png')} style={styles.statImage}/>
						<Image source={require('app/src/img/caracs/air_damage.png')} style={styles.statImage}/>
						<Image source={require('app/src/img/caracs/critical_damage.png')} style={styles.statImage}/>
						<Image source={require('app/src/img/caracs/pushback_damage.png')} style={styles.statImage}/>
						<Image source={require('app/src/img/caracs/melee_damage_percent.png')} style={styles.statImage}/>
						<Image source={require('app/src/img/caracs/ranged_damage_percent.png')} style={styles.statImage}/>
						<Image source={require('app/src/img/caracs/weapon_damage_percent.png')} style={styles.statImage}/>
						<Image source={require('app/src/img/caracs/spell_damage_percent.png')} style={styles.statImage}/>

						<Image source={require('app/src/img/caracs/neutral_resistance.png')} style={styles.statImage}/>
						<Image source={require('app/src/img/caracs/earth_resistance.png')} style={styles.statImage}/>
						<Image source={require('app/src/img/caracs/fire_resistance.png')} style={styles.statImage}/>
						<Image source={require('app/src/img/caracs/water_resistance.png')} style={styles.statImage}/>
						<Image source={require('app/src/img/caracs/air_resistance.png')} style={styles.statImage}/>
						<Image source={require('app/src/img/caracs/critical_resistance.png')} style={styles.statImage}/>
						<Image source={require('app/src/img/caracs/pushback_resistance.png')} style={styles.statImage}/>
						<Image source={require('app/src/img/caracs/ranged_resistance.png')} style={styles.statImage}/>
						<Image source={require('app/src/img/caracs/ranged_resistance.png')} style={styles.statImage}/>
						<Image source={require('app/src/img/caracs/ranged_resistance.png')} style={styles.statImage}/>
						<Image source={require('app/src/img/caracs/ranged_resistance.png')} style={styles.statImage}/>
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

						<Text style={styles.statName}>Sagesse</Text>
						<Text style={styles.statName}>Force</Text>
						<Text style={styles.statName}>Intelligence</Text>
						<Text style={styles.statName}>Chance</Text>
						<Text style={styles.statName}>Agilité</Text>
						<Text style={styles.statName}>Puissance</Text>
						<Text style={styles.statName}>Fuite</Text>
						<Text style={styles.statName}>Tacle</Text>
						<Text style={styles.statName}>Esquive PA</Text>
						<Text style={styles.statName}>Esquive PM</Text>
						<Text style={styles.statName}>Retrait PA</Text>
						<Text style={styles.statName}>Retrait PM</Text>

						<Text style={styles.statName}>Dommages Neutre</Text>
						<Text style={styles.statName}>Dommages Terre</Text>
						<Text style={styles.statName}>Dommages Feu</Text>
						<Text style={styles.statName}>Dommages Eau</Text>
						<Text style={styles.statName}>Dommages Air</Text>
						<Text style={styles.statName}>Dommages Critique</Text>
						<Text style={styles.statName}>Dommages Poussée</Text>
						<Text style={styles.statName}>Dommages Mélée</Text>
						<Text style={styles.statName}>Dommages Distance</Text>
						<Text style={styles.statName}>Dommages d'Armes</Text>
						<Text style={styles.statName}>Dommages aux Sorts</Text>

						<Text style={styles.statName}>Résistance Neutre</Text>
						<Text style={styles.statName}>Résistance Terre</Text>
						<Text style={styles.statName}>Résistance Feu</Text>
						<Text style={styles.statName}>Résistance Eau</Text>
						<Text style={styles.statName}>Résistance Air</Text>
						<Text style={styles.statName}>Résistance Critique</Text>
						<Text style={styles.statName}>Résistance Poussée</Text>
						<Text style={styles.statName}>Résistance Mélée</Text>
						<Text style={styles.statName}>Résistance Distance</Text>
						<Text style={styles.statName}>Résistance d'Armes</Text>
						<Text style={styles.statName}>Résistance aux Sorts</Text>
					</View>
				</View>
			</View>
		);
	}
}

export default CharacterStats;

const styles = StyleSheet.create({
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
	},
});
