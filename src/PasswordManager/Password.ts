import Entry from './Entry'

interface Password extends Entry {
  user: string
  pass: string
  url: URL
}

export default Password
