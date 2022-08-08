import Entry from './Entry'

interface Password extends Entry {
  user: string
  pass: string
  url: string
}

export default Password
