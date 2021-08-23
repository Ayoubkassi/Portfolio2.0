import React from 'react';
import { Item, Social } from './Social.styles';
import youtube from '../../assets/youtube.svg';
import snap from '../../assets/snapchat.svg';
import discord from '../../assets/discord.svg';
import github from '../../assets/github.svg';
import instagram from '../../assets/instagram.svg';
import message from '../../assets/message.svg';
import twitter from '../../assets/twitter.svg';

const Media = (props) => {
  return (
    <Social>
      <Item><img src={youtube} style={{width : '40px'}}/></Item>
      <Item><img src={snap} style={{width : '40px'}}/></Item>
      <Item><img src={discord} style={{width : '40px'}}/></Item>
      <Item><img src={github} style={{width : '40px'}}/></Item>
      <Item><img src={instagram} style={{width : '40px'}}/></Item>
      <Item><img src={message} style={{width : '40px'}}/></Item>
      <Item><img src={twitter} style={{width : '40px'}}/></Item>
    </Social>
  )
}

export default Media;
