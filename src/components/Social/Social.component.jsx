import React from 'react';
import { Item, Social } from './Social.styles';
import youtube from '../../assets/youtube.svg';
import snap from '../../assets/snapchat.svg';
import discord from '../../assets/discord.svg';
import github from '../../assets/github.svg';
import instagram from '../../assets/instagram.svg';
import message from '../../assets/message.svg';
import twitter from '../../assets/twitter.svg';

const Media = ({flexDirection, size}) => {
  return (
    <Social flexDirection={flexDirection} >
      <Item size={size}><img src={youtube} style={{width : size ? '20px' : '40px'}}/></Item>
      <Item size={size}><img src={snap} style={{width : size ? '20px' : '40px'}}/></Item>
      <Item size={size}><img src={discord} style={{width : size ? '20px' : '40px'}}/></Item>
      <Item size={size}><img src={github} style={{width : size ? '20px' : '40px'}}/></Item>
      <Item size={size}><img src={instagram} style={{width : size ? '20px' : '40px'}}/></Item>
      <Item size={size}><img src={message} style={{width : size ? '20px' : '40px'}}/></Item>
      <Item size={size}><img src={twitter} style={{width : size ? '20px' : '40px'}}/></Item>
    </Social>
  )
}

export default Media;
