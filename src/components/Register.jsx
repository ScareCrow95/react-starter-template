import {
  Button,
  Checkbox,
  Circle,
  Divider,
  Flex,
  Icon,
  Input,
  Text,
} from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'
import { useEffect, useState } from 'react'
import { MdOutlineArrowBack } from 'react-icons/md'

import { FormControl, FormErrorMessage } from '@chakra-ui/react'
import { User } from '../store/classes/User'
import { useStores } from '../store/rootStore'

const Register = observer(() => {
  const root = useStores()
  const [idx, setIdx] = useState(0)
  const [data, setData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    discordID: '',
    pubgName: '',
    pubgMobileID: '',
    dob: '',
  })

  const [error, setError] = useState({
    email: false,
    password: false,
    confirmPassword: false,
    firstName: false,
    lastName: false,
    discordID: false,
    pubgName: false,
    pubgMobileID: false,
    dob: false,
    agree: false,
  })

  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    let err = { ...error }

    err.confirmPassword =
      data.confirmPassword.length > 0 && data.password !== data.confirmPassword
    if (submitted) {
      if (
        !data.email
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          )
      ) {
        err.email = true
      } else {
        err.email = false
      }

      err.password = data.password.length < 6
      err.confirmPassword = data.password !== data.confirmPassword
    }
    // console.log(err)
    setError(err)
  }, [data])

  function registerEmail() {
    let err = { ...error }
    if (
      !data.email
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
      err.email = true
    } else {
      err.email = false
    }

    err.password = data.password.length < 6
    err.confirmPassword = data.password !== data.confirmPassword

    setError(err)
    setSubmitted(true)

    for (let value of Object.values(err)) {
      if (value) {
        return false
      }
    }
    return true
  }

  function submitRest() {
    let err = { ...error }
    err.firstName = data.firstName.length < 1
    err.lastName = data.lastName.length < 1
    err.discordID = data.discordID.length < 1
    err.pubgMobileID = data.pubgMobileID.length < 1
    err.pubgName = data.pubgName.length < 1

    const year18 = 60 * 60 * 24 * 365 * 18 * 1000
    if (!data.dob || Date.now() - new Date(data.dob).getTime() < year18) {
      err.dob = true
    } else {
      err.dob = false
    }

    setError(err)
    if (err.agree) {
      root.showToast(
        'Error',
        'Please agree to terms and conditions before continuing',
        'error'
      )
      return false
    }
    for (let value of Object.values(err)) {
      if (value) {
        return false
      }
    }

    return true
  }

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
        {idx === 1 && (
          <Icon
            as={MdOutlineArrowBack}
            boxSize={7}
            position='absolute'
            top={0}
            cursor='pointer'
            onClick={() => setIdx(0)}
            left={0}
            m={5}
          />
        )}
        <Text fontSize='3xl' mb={8}>
          Register
        </Text>
        {idx === 0 && (
          <>
            <FormControl isInvalid={error.email} mb={3}>
              <Input
                value={data.email}
                placeholder='Email'
                onChange={(e) => setData({ ...data, email: e.target.value })}
              />
              {error.email && (
                <FormErrorMessage>Please enter a valid email</FormErrorMessage>
              )}
            </FormControl>
            <FormControl isInvalid={error.password} mb={3}>
              <Input
                type='password'
                value={data.password}
                placeholder='Password'
                onChange={(e) => setData({ ...data, password: e.target.value })}
              />
              {error.password && (
                <FormErrorMessage>
                  Password needs to be atleast 6 characters
                </FormErrorMessage>
              )}
            </FormControl>
            <FormControl isInvalid={error.confirmPassword} mb={3}>
              <Input
                type='password'
                value={data.confirmPassword}
                placeholder='Confirm Password'
                onChange={(e) =>
                  setData({ ...data, confirmPassword: e.target.value })
                }
              />
              {error.confirmPassword && (
                <FormErrorMessage>Passwords do not match</FormErrorMessage>
              )}
            </FormControl>
          </>
        )}

        {idx === 1 && (
          <>
            <Flex mb={3}>
              <FormControl isInvalid={error.firstName} mr={2}>
                <Input
                  placeholder='First Name'
                  value={data.firstName}
                  onChange={(e) =>
                    setData({ ...data, firstName: e.target.value })
                  }
                />
                {error.firstName && (
                  <FormErrorMessage>Required</FormErrorMessage>
                )}
              </FormControl>

              <FormControl isInvalid={error.lastName}>
                <Input
                  placeholder='Last Name'
                  value={data.lastName}
                  onChange={(e) =>
                    setData({ ...data, lastName: e.target.value })
                  }
                />
                {error.lastName && (
                  <FormErrorMessage>Required</FormErrorMessage>
                )}
              </FormControl>
            </Flex>

            <FormControl isInvalid={error.discordID} mb={3}>
              <Input
                placeholder='Discord ID'
                onChange={(e) =>
                  setData({ ...data, discordID: e.target.value })
                }
              />
              {error.discordID && <FormErrorMessage>Required</FormErrorMessage>}
            </FormControl>
            <FormControl
              isInvalid={error.lastName}
              mb={3}
              onChange={(e) => setData({ ...data, pubgName: e.target.value })}>
              <Input placeholder='Exact PUBG in game name' />
              {error.pubgName && <FormErrorMessage>Required</FormErrorMessage>}
            </FormControl>
            <FormControl isInvalid={error.pubgMobileID} mb={3}>
              <Input
                placeholder='PUBG Mobile ID'
                onChange={(e) =>
                  setData({ ...data, pubgMobileID: e.target.value })
                }
              />
              {error.pubgMobileID && (
                <FormErrorMessage>Required</FormErrorMessage>
              )}
            </FormControl>
            <FormControl isInvalid={error.dob} mb={3}>
              <Input
                onChange={(e) => setData({ ...data, dob: e.target.value })}
                color={data.dob ? 'white' : '#4c4c4c'}
                placeho
                type='date'
                style={{ colorScheme: 'dark' }}
              />
              {error.dob && (
                <FormErrorMessage>
                  You need to be 18 years or older to participate
                </FormErrorMessage>
              )}
            </FormControl>

            <Flex align='center' mt={3}>
              <Checkbox
                size='lg'
                mr={2}
                onChange={(e) =>
                  setError({ ...error, agree: !e.target.checked })
                }
              />
              <Text>
                Agree to{' '}
                <Text as='span' color='primary.100' cursor='pointer'>
                  terms and conditions
                </Text>
              </Text>
            </Flex>
          </>
        )}

        <Button
          mt={6}
          w={64}
          onClick={async () => {
            if (idx === 0 && registerEmail()) {
              setIdx(1)
            } else if (idx === 1 && submitRest()) {
              const result = await root.POST_NO_AUTH(
                'api/account/register',
                data
              )
              if (result) {
                root.showToast(
                  'Success!',
                  'Registration form completed!',
                  'success'
                )
                root.user = new User({ ...data })
                root.uiStore.screen = 'register-done'
              }
            }
          }}>
          {idx === 0 ? 'Continue' : 'Complete Registration'}
        </Button>

        <Flex mt={8}>
          <Circle
            boxSize={3}
            onClick={() => setIdx(0)}
            bg={idx === 0 ? 'white' : 'transparent'}
            mr={2}
            border={idx === 1 ? '2px' : 0}
            borderColor='border.50'
          />
          <Circle
            boxSize={3}
            // bg='red'
            bg={idx === 1 ? 'white' : 'transparent'}
            border={idx === 0 ? '2px' : 0}
            borderColor='border.50'
          />
        </Flex>
        {idx === 0 && (
          <>
            <Divider my={8} />
            <Text color='grey.300' align='center'>
              If you already have registered, you can{' '}
              <Text
                as='span'
                color='primary.100'
                fontWeight='semibold'
                cursor='pointer'
                onClick={() => (root.uiStore.screen = 'login')}>
                Login
              </Text>{' '}
              to view or edit your info.
            </Text>
          </>
        )}
      </Flex>
    </Flex>
  )
})

export default Register
