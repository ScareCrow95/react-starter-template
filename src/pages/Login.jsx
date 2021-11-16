import React, { useState, useEffect } from 'react'
import { Box, Text, Center, Flex, Image, Circle, Icon } from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'

const Login = observer(() => {
  return (
    <Flex w='100vw' h='100vh' bg='secondary.300' justify='center'>
      <Center>
        <Text fontSize='4xl'>React starter project</Text>
      </Center>
    </Flex>
  )
})

export default Login
