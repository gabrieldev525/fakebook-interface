import styled from 'styled-components'

export const StoryView = styled.View`
  background-color: #fff;
  padding: 10px 0px 10px 10px;
  height: 200px;
`

export const StoryItem = styled.View`
  width: 120px;
  height: 180px;
  border-radius: 14px;
  margin-right: 10px;
`
export const StoryImage = styled.Image`
  flex: 1;
  width: auto;
  height: auto;
  border-radius: 14px;
`

export const StoryProfileIcon = styled.View`
  background-color: #fff;
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin: 5px;
  align-items: center;
  justify-content: center;
`

export const StoryProfileIconImage = styled.Image`
  flex: 1;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  border-width: 2px;
  border-color: #167EFD;
`

export const StoryTitle = styled.Text`
  position: absolute;
  bottom: 0;
  color: #fff;
  margin: 5px;
`