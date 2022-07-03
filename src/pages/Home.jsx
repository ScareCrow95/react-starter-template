import React, { useState, useEffect } from 'react'
import {
  Box,
  Text,
  Center,
  Flex,
  Image,
  Circle,
  Icon,
  Input,
  Button,
  Spacer,
  Heading,
} from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'
import bg from '../assets/images/bg.png'
import Register from '../components/Register'
import Footer from '../components/Footer'
import RegisterSucess from '../components/RegisterSucess'
import { useStores } from '../store/rootStore'
import Login from '../components/Login'
import UserHome from '../components/UserHome'

const Home = observer(() => {
  const { uiStore } = useStores()
  return (
    <Flex
      w='100vw'
      h='100vh'
      bg='secondary.300'
      direction='column'
      position='relative'>
      <Image
        src={bg}
        h='450px'
        objectFit='contain'
        objectPosition='top'
        opacity='.7'
      />
      <Flex position='absolute' bottom='0' w='100%' direction='column'>
        <Footer />
      </Flex>
      <Flex
        position='absolute'
        top='0'
        w='100%'
        justify='center'
        align='center'
        direction='column'
        h='230px'>
        <Heading
          color='primary.100'
          fontSize='100px'
          textShadow='0 4px 12px black'>
          LIVIK
        </Heading>
        <Text fontSize='28px' fontWeight='bold' textShadow='0 0 4px black'>
          COMMUNITY CUP
        </Text>
      </Flex>
      {uiStore.screen === 'register' && <Register />}
      {uiStore.screen === 'register-done' && <RegisterSucess />}
      {uiStore.screen === 'login' && <Login />}
      {uiStore.screen === 'user' && <UserHome />}
      <Spacer />
    </Flex>
  )
})

export default Home
