import crypto from 'crypto'

const encrypt = (secret: string, key: string): string => {
  const buffer = Buffer.from(secret, 'utf8')
  key = crypto.createHash('sha256').update(String(key)).digest('base64').substr(0, 32)
  const iv = crypto.randomBytes(16)
  const cipher = crypto.createCipheriv('aes-256-ctr', key, iv)
  const result = Buffer.concat([iv, cipher.update(buffer), cipher.final()])
  return result.toString('base64')
}

const decrypt = (secret: string, key: string): string => {
  let encrypted = Buffer.from(secret, 'base64')
  key = crypto.createHash('sha256').update(String(key)).digest('base64').substr(0, 32)
  const iv = encrypted.slice(0, 16)
  encrypted = encrypted.slice(16)
  const decipher = crypto.createDecipheriv('aes-256-ctr', key, iv)
  const result = Buffer.concat([decipher.update(encrypted), decipher.final()])
  return result.toString()
}

const AES = { encrypt, decrypt }
export default AES
