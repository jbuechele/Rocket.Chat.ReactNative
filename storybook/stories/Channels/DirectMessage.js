import React from 'react';
import { ScrollView } from 'react-native';

import RoomItem from '../../../app/presentation/RoomItem';

const date = '2017-10-10T10:00:00Z';
const baseUrl = 'https://open.rocket.chat';

const params = {
	_updatedAt: date,
	baseUrl,
	height: 70
};

export default (
	<ScrollView>
		<RoomItem
			type='d'
			name='rocket.cat'
			{...params}
		/>
		<RoomItem
			type='d'
			unread={0}
			alert
			name='rocket.cat'
			{...params}
		/>
		<RoomItem
			type='d'
			unread={1}
			name='rocket.cat'
			{...params}
		/>
		<RoomItem
			type='d'
			unread={9}
			alert
			name="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
			{...params}
		/>
		<RoomItem
			type='d'
			unread={99}
			name="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
			{...params}
		/>
		<RoomItem
			type='d'
			unread={100}
			userMentions={0}
			name="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
			{...params}
		/>
		<RoomItem
			type='d'
			unread={100000}
			userMentions={0}
			name="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
			{...params}
		/>
		<RoomItem
			type='d'
			unread={100000}
			userMentions={1}
			name="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
			{...params}
		/>
		<RoomItem
			type='d'
			name='W'
			unread={-100}
			{...params}
		/>
		<RoomItem
			type='d'
			name='WW'
			unread={-100}
			{...params}
		/>
		<RoomItem
			type='d'
			name=''
			unread={-100}
			{...params}
		/>
	</ScrollView>
);
