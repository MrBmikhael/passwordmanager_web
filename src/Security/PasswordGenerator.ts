import { passwordStrength, Options } from 'check-password-strength'
import securePassword from 'secure-random-password'

export interface PasswordGeneratorProps {
  length: number
  symbols: boolean
  numbers: boolean
  lowercase: boolean
  uppercase: boolean
  exclude: string
}

export const generatePassword = (props: PasswordGeneratorProps): string => {
  const excludeReg = new RegExp(props.exclude.split('').join('|'), 'g')

  const characters = []
  let chars = securePassword.lower.replace(excludeReg, '')
  if (chars.length > 0) {
    characters.push(chars)
  }

  if (props.uppercase) {
    const chars = securePassword.upper.replace(excludeReg, '')
    if (chars.length > 0) characters.push(chars)
  }

  if (props.numbers) {
    const chars = securePassword.digits.replace(excludeReg, '')
    if (chars.length > 0) characters.push(chars)
  }

  if (props.symbols) {
    const chars = "!@#$%^&*_".replace(excludeReg, '')
    if (chars.length > 0) characters.push(chars)
  }

  let retries = 3
  let pass = ''

  try {
    pass = securePassword.randomPassword({
      characters,
      length: Number(props.length),
      avoidAmbiguous: false,
      predicate: (pass) => {
        retries -= 1
        if (retries < 0) return true
        return Boolean(pass.charAt(0).match(/[a-zA-Z]/g))
      }
    })
  } catch (e) {
    console.error(e)
  }

  return pass
}

export const checkPasswordStrength = (password: string) => {
  const strengthOptions: Options<string> = [
    {
      id: 0,
      value: "Too weak",
      minDiversity: 0,
      minLength: 0
    },
    {
      id: 1,
      value: "Weak",
      minDiversity: 2,
      minLength: 6
    },
    {
      id: 2,
      value: "Medium",
      minDiversity: 3,
      minLength: 12
    },
    {
      id: 3,
      value: "Strong",
      minDiversity: 4,
      minLength: 16
    },
    {
      id: 4,
      value: "Very Strong",
      minDiversity: 4,
      minLength: 32
    },
    {
      id: 5,
      value: "Very Strong",
      minDiversity: 3,
      minLength: 36
    }
  ]

  return passwordStrength(password, strengthOptions, '`-=~!@#$%^&*()_+/.,?><;\'":[]{}\\|')
}