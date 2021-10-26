import { generatePassword, PasswordGeneratorProps } from '../Security/PasswordGenerator'

test('Confirm password length', () => {
  const props: PasswordGeneratorProps = {
    length: 150
  }
  const passwd = generatePassword(props)
  expect(passwd.length).toEqual(props.length)
})

test('Confirm password length', () => {
  const passwd = generatePassword()
  expect(passwd.length).toEqual(10)
})
