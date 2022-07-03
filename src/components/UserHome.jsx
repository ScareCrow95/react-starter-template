import React, { useState, useEffect } from 'react'
import {
  Box,
  Text,
  Center,
  Flex,
  Image,
  Circle,
  Icon,
  Divider,
  InputGroup,
  InputLeftAddon,
  Input,
  Button,
} from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'
import { useStores } from '../store/rootStore'

const UserHome = observer(() => {
  const root = useStores()
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
        <Text fontSize='3xl' mb={1}>
          Welcome, {root.user.firstName}
        </Text>
        <Text mb={2}>{root.user.email}</Text>
        <Text fontSize='sm' color='grey.300'>
          You can update your account info here
        </Text>
        <Divider my={6} />
        <InputGroup mb={3}>
          <InputLeftAddon w={44} children='PUBG Mobile ID' />
          <Input
            placeholder='PUBG Mobile Id'
            value={root.user.pubgMobileID}
            onChange={(e) => (root.user.pubgMobileID = e.target.value)}
          />
        </InputGroup>
        <InputGroup mb={3}>
          <InputLeftAddon w={44} children='PUBG Game Name' />
          <Input
            placeholder='PUBG Game Name'
            value={root.user.pubgName}
            onChange={(e) => (root.user.pubgName = e.target.value)}
          />
        </InputGroup>
        <InputGroup mb={3}>
          <InputLeftAddon w={44} children='Discord ID' />
          <Input
            placeholder='Discord ID'
            value={root.user.discordID}
            onChange={(e) => (root.user.discordID = e.target.value)}
          />
        </InputGroup>

        <Button w={64} mt={4}>
          Save
        </Button>
      </Flex>
    </Flex>
  )
})

export default UserHome
