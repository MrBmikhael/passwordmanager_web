import AES from '../Security/AES'

const key = "password123"
const secret = "qwerty"
let encryptedText = Buffer.from("")

test('Encrypt string', () => {
  encryptedText = AES.encrypt(Buffer.from(secret, 'utf8'), key)
  expect(encryptedText).not.toEqual(secret)
})

test('Decrypt string', () => {
  const txt = AES.decrypt(encryptedText, key).toString()
  expect(txt).toEqual(secret)
})

