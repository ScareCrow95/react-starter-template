import React, { useState, useEffect } from 'react'
import {
  Box,
  Text,
  Center,
  Flex,
  Image,
  Circle,
  Icon,
  Spacer,
} from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'
import { BsDiscord, BsFacebook, BsTwitch, BsTwitter } from 'react-icons/bs'
import logo from '../assets/images/logo.png'
const Footer = observer(() => {
  return (
    <Flex height='80px' align='center'>
      <Image src={logo} h='30px' ml={5} />
      <Spacer />
      <Text mr={4} color='grey.300'>
        Follow Us
      </Text>
      <Icon mr={3} as={BsDiscord} boxSize={5} color='grey.300' />
      <Icon mr={3} as={BsFacebook} boxSize={5} color='grey.300' />
      <Icon mr={3} as={BsTwitch} boxSize={5} color='grey.300' />
      <Icon mr={6} as={BsTwitter} boxSize={5} color='grey.300' />
    </Flex>
  )
})

export default Footer
