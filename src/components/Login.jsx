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
  Divider,
} from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'
import { useStores } from '../store/rootStore'
import { User } from '../store/classes/User'

const Login = observer(() => {
  const root = useStores()
  const { uiStore, POST_NO_AUTH } = useStores()
  const [email, setEmail] = useState()
  return (
    <Flex direction='column' align='center' justify='center' mt='-240px'>
      <Flex
        direction='column'
        mt={4}
        bg='rgba(255,255,255,0.02)'
        boxShadow='dark-lg'
        p={8}
        w='450px'
        position='relative'
        rounded='xl'
        align='center'
        backdropFilter='blur(3px)'>
        <Text fontSize='3xl' mb={8}>
          Log In
        </Text>
        <Input
          mb={3}
          value={email}
          placeholder='email'
          type='email'
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input mb={3} placeholder='password' type='password' />
        <Button
          mt={6}
          w={64}
          onClick={async () => {
            const user = await POST_NO_AUTH('api/account/login', { email })
            if (user) {
              root.user = new User(user, root)
              console.log(root.user)
              uiStore.screen = 'user'
            }
          }}>
          Login
        </Button>
        <Divider my={8} />
        <Text color='grey.300' align='center'>
          If you do not have an account, you can{' '}
          <Text
            as='span'
            color='primary.100'
            fontWeight='semibold'
            cursor='pointer'
            onClick={() => (uiStore.screen = 'register')}>
            Register
          </Text>{' '}
          for an account here.
        </Text>
      </Flex>
    </Flex>
  )
})

export default Login
