// react imports
import React from 'react'

// third imports
import Icon from 'react-native-vector-icons/FontAwesome'

// local imports
import {
  WAYTView,
  ProfileImage,
  WAYTInput
} from './style'

// project imports
import data from '../../data.json'

export default WAYT = () => {
  return (
    <WAYTView>
      <ProfileImage source={{uri: data['current_profile']['profile_image']}} />
      <WAYTInput
        placeholder='No que você está pensando?'
        placeholderTextColor="#46474C" />
      <Icon name='photo' size={25} style={{
        marginLeft: 10,
        marginRight: 10,
        color: '#46474C'
      }} />
    </WAYTView>
  )
}
