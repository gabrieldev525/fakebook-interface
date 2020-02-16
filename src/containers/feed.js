// react imports
import React from 'react'
import { ScrollView } from 'react-native'
// project imports
import StorySession from '../components/story'
import Header from '../components/header'
import WAYT from '../components/wayt'
import Post from '../components/post'

import { MainView } from '../components/common/style'

export const Feed = () => {
  return (
    <MainView>
      <Header />

      <ScrollView>
        <WAYT />
        <StorySession />
        <Post image={require('../images/mountain.jpeg')} />
        <Post image={require('../images/burgues.jpg')} />
        <Post image={require('../images/chapolin.jpg')} />
        <Post image={require('../images/casal.jpg')} />
      </ScrollView>

    </MainView>
  )
}

export default Feed