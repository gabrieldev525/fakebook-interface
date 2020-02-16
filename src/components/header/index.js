// react native imports
import React from 'react'

// third imports
import Icon from 'react-native-vector-icons/MaterialIcons'
Icon.loadFont();
import IconFontAwesome from 'react-native-vector-icons/FontAwesome5'

// local imports
import data from '../../data.json'
import {
  HeaderView,
  FacebookLogo,
  ActionButton
} from './style'

export const HeaderSession = () => {
  return (
    <HeaderView>
      <FacebookLogo>fakebook</FacebookLogo>

      <ActionButton style={{ marginLeft: 'auto' }}>
        <Icon name='search' size={30} color='#3C4145' />
      </ActionButton>
      <ActionButton>
        <IconFontAwesome name='facebook-messenger' size={30} color='#3C4145' />
      </ActionButton>
    </HeaderView>
  )
}

export default HeaderSession