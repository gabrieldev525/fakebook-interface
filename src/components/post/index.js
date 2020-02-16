// react imports
import React from 'react'

// third imports
import Icon from 'react-native-vector-icons/Entypo'
import IconAnt from 'react-native-vector-icons/AntDesign'
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons'

// local imports
import {
  PostView,
  PostHeader,
  TitleView,
  ProfileName,
  PostTime,
  PostBody,
  BodyText,
  BodyImage,
  PostInfo,
  Reaction,
  PostInfoText,
  ActionButtonView,
  ActionButton,
  ActionButtonText
} from './style'

// project imports
import data from '../../data.json'

import {
  ProfileImage
} from '../wayt/style'


export default Post = ({ image }) => {
  return (
    <PostView>
      <PostHeader>
        <ProfileImage source={{uri: data['current_profile']['profile_image']}} />

        <TitleView>
          <ProfileName>Gabriel Victor</ProfileName>
          <PostTime>
            Há 1 hora
            &nbsp;
            <Icon name='globe' style={{
              color: '#46474C',
            }} />
          </PostTime>
        </TitleView>
        <Icon
          name='dots-three-horizontal'
          size={24}
          style={{
            marginLeft: 'auto',
            marginRight: 10,
            color: '#46474C'
          }} />
      </PostHeader>

      <PostBody>
        <BodyText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</BodyText>
        <BodyImage source={image}/>
      </PostBody>

      <PostInfo>
          <Reaction source={require('../../images/sad.png')}/>
          <Reaction source={require('../../images/like.png')}/>
          <Reaction source={require('../../images/love.png')}/>
          <PostInfoText
            style={{
              marginLeft: 2
            }}>6.940</PostInfoText>
          <PostInfoText
            style={{
              marginLeft: 'auto'
            }}>150 comentários</PostInfoText>
      </PostInfo>

      <ActionButtonView>
        <ActionButton>
          <IconAnt
            name='like2'
            size={20}
            style={{
              color: '#46474C'
            }}/>
          <ActionButtonText>Curtir</ActionButtonText>
        </ActionButton>
        <ActionButton>
          <IconMaterial
            name='comment-outline'
            size={20}
            style={{
              color: '#46474C'
            }}/>
          <ActionButtonText>Comentar</ActionButtonText>
        </ActionButton>
        <ActionButton>
          <IconMaterial
            name='share-outline'
            size={20}
            style={{
              color: '#46474C'
            }}/>
          <ActionButtonText>Compartilhar</ActionButtonText>
        </ActionButton>
      </ActionButtonView>
    </PostView>
  );
}
