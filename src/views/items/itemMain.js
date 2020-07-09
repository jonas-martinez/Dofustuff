import React from 'react';

import { StyleSheet, Text, View, Image } from 'react-native';

import 'app/src/global.js';

// -----------------
// ITEM MAIN
// -----------------

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

export default ItemMain;

const styles = StyleSheet.create({
  itemMain: {
  	flexDirection: 'row',
  },
});
