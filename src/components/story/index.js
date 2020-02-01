// react native imports
import React from 'react'

import {
  ScrollView
} from 'react-native'

// third imports
import Icon from 'react-native-vector-icons/MaterialIcons'
Icon.loadFont();

// local imports
import {
  StoryView,
  StoryItem,
  StoryImage,
  StoryProfileIcon,
  StoryProfileIconImage,
  StoryTitle
} from './style'

// json to data
import data from '../../data.json'

export const StorySession = () => {
  return (
    <StoryView>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        <StoryItem>
          <StoryImage source={{uri: data['current_profile']['profile_image']}} />
          <StoryProfileIcon>
            <Icon name='add' size={30} color='#167EFD'/>
          </StoryProfileIcon>
          <StoryTitle>{data.current_profile.username}</StoryTitle>
        </StoryItem>
        {
          data.story.map(({ username, profile_image, posts }, index) => {
            return (
              <StoryItem key={index}>
                <StoryImage source={{uri: profile_image}} />
                <StoryProfileIcon>
                  <StoryProfileIconImage source={{uri: posts[posts.length - 1].image}} />
                </StoryProfileIcon>
                <StoryTitle>{username}</StoryTitle>
              </StoryItem>
            )
          })
        }
      </ScrollView>
    </StoryView>
  )
}

export default StorySession