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
} from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'

const Header = observer(() => {
  return (
    <Flex p={4} direction='column'>
      <Text fontSize='xl'>Production Overview</Text>
    </Flex>
  )
})

export default Header
