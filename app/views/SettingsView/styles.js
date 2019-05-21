import { StyleSheet } from 'react-native';

import {
	COLOR_SEPARATOR, COLOR_WHITE, COLOR_BORDER
} from '../../constants/colors';
import sharedStyles from '../Styles';

export default StyleSheet.create({
	contentContainer: {
		backgroundColor: COLOR_WHITE,
		marginBottom: 30
	},
	container: {
		flex: 1,
		backgroundColor: '#F6F7F9'
	},
	sectionItemTitle: {
		alignSelf: 'flex-start',
		fontSize: 16,
		marginStart: 20,
		...sharedStyles.textColorNormal,
		...sharedStyles.textRegular
	},
	sectionItemSubTitle: {
		alignSelf: 'flex-start',
		fontSize: 12,
		marginStart: 20,
		...sharedStyles.textColorNormal,
		...sharedStyles.textRegular
	},
	sectionItem: {
		backgroundColor: COLOR_WHITE,
		flex: 1,
		paddingVertical: 20,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	sectionItemDisabled: {
		opacity: 0.3
	},
	separator: {
		height: StyleSheet.hairlineWidth,
		backgroundColor: COLOR_SEPARATOR,
		marginHorizontal: 10
	},
	sectionSeparatorBorder: {
		borderColor: COLOR_BORDER,
		borderTopWidth: 10
	},
	iconStyle: {
		alignSelf: 'baseline',
		marginEnd: 20
	},
	switch: {
		marginStart: 5
	}
});
