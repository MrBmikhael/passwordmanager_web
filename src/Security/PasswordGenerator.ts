import generator from 'generate-password'

export interface PasswordGeneratorProps {
  length?: number
  numbers?: boolean
  symbols?: boolean | string
  lowercase?: boolean
  uppercase?: boolean
  excludeSimilarCharacters?: boolean
  exclude?: string
}

export const generatePassword = (props?: PasswordGeneratorProps) => {
  return generator.generate({
    ...props,
    strict: true
  })
}
