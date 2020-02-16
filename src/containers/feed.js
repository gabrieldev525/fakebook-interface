import React from 'react'

import StorySession from '../components/story'
import Header from '../components/header'
import WAYT from '../components/wayt'
import { MainView } from '../components/common/style'

export const Feed = () => {
  return (
    <MainView>
      <Header />
      <WAYT />
      <StorySession />
    </MainView>
  )
}

export default Feed