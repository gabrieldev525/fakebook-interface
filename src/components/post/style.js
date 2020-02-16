// react imports
import {
  Dimensions
} from 'react-native'

// third imports
import styled from 'styled-components'

// variables
const dimensions = Dimensions.get('window');

export const PostView = styled.View`
  background-color: #fff;
  display: flex;
  margin-top: 10px;
`

export const PostHeader = styled.View`
  display: flex;
  flex-direction: row;
  padding: 10px 0px 10px 10px;
`

export const TitleView = styled.View`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`
export const ProfileName = styled.Text`
  font-weight: bold;
  font-size: 16px;
`

export const PostTime = styled.Text`
  color: #46474C
`

export const PostBody = styled.View`
  display: flex;
  flex-direction: column;
  marginTop: 10px;
`

export const BodyText = styled.Text`
  font-size: 17px;
  text-align: justify;
  padding: 0 8px;
`

export const BodyImage = styled.Image`
  max-width: ${Math.round(dimensions.width)}px;
  margin: 10px 0;
`

export const PostInfo = styled.View`
  margin: 10px;
  display: flex;
  flex-direction: row;
`

export const Reaction = styled.Image`
  width: 20px;
  height: 20px;
  margin: 0 1px;
`

export const PostInfoText = styled.Text`
  color: #46474C;
`

export const ActionButtonView = styled.View`
  display: flex;
  flex-direction: row;
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-color: #bbb;
`

export const ActionButton = styled.View`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  padding: 10px;
`

export const ActionButtonText = styled.Text`
  color: #46474C;
  margin-left: 5px;
  font-weight: 600;
`