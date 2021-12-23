import generator from 'generate-password'
import { passwordStrength, Options } from 'check-password-strength'

export interface PasswordGeneratorProps {
  length?: number
  exclude?: string
  symbols?: boolean
  numbers?: boolean
  lowercase?: boolean
  uppercase?: boolean
  excludeSimilarCharacters?: boolean
}

export const generatePassword = (props?: PasswordGeneratorProps) => {
  return generator.generate({
    ...props,
    strict: true
  })
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

  return passwordStrength(password, strengthOptions)
}