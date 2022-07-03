import React, { useState, useEffect } from 'react'
import {
  Box,
  Text,
  Center,
  Flex,
  Image,
  Circle,
  Icon,
  Heading,
  Divider,
} from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'
import { BsDiscord } from 'react-icons/bs'
import { useStores } from '../store/rootStore'
const RegisterSucess = observer(() => {
  const { user, uiStore } = useStores()
  return (
    <Flex
      justify='center'
      align='center'
      direction='column'
      mt='-100px'
      zIndex='1'>
      <Flex direction='column' align='center'>
        <Heading>REGISTRATION COMPLETED!</Heading>
        <Divider my={4} />
        <Text fontSize='xl'>
          Thank you for registring for the{' '}
          <Text as='span' fontWeight='bold' color='primary.100'>
            Livik Community Cup
          </Text>
        </Text>
        <Text color='grey.300' mt={8} align='center'>
          We have sent a confirmation email to {user.email}
          <br />
          You can edit your account info by{' '}
          <Text
            as='span'
            fontWeight='semibold'
            color='primary.100'
            cursor='pointer'
            onClick={() => (uiStore.screen = 'login')}>
            logging in
          </Text>{' '}
          at anytime.
        </Text>
        <Divider my={4} mt={16} />
        <Text color='grey.300'>
          If you haven't already please join our discord server!
        </Text>
        <Icon
          as={BsDiscord}
          boxSize={12}
          color='#5662F6'
          mt={4}
          cursor='pointer'
        />
      </Flex>
    </Flex>
  )
})

export default RegisterSucess
