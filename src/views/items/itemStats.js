import React from 'react';

import { Text } from 'react-native';

import 'app/src/global.js';

// -----------------
// ITEM STATS
// -----------------

class ItemStats extends React.Component {
	render() {
		var statsList = this.props.itemStats.map(function(stat) {
			return (
				<Text key={stat}>{stat}</Text>
			);
		});

		return statsList;
	}
}

export default ItemStats;
