import React from 'react'

import StorySession from '../components/story'
import Header from '../components/header'
import {
  MainView
} from '../components/common/style'

export const Feed = () => {
  return (
    <MainView>
      <Header />
      <StorySession />
    </MainView>
  )
}

export default Feed