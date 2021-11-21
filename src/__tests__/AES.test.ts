import AES from '../Security/AES'

const key = "password123"
const secret = "qwerty"
let encryptedText = ""

test('Encrypt string', () => {
  encryptedText = AES.encrypt(secret, key)
  expect(encryptedText).not.toEqual(secret)
})

test('Decrypt string', () => {
  const txt = AES.decrypt(encryptedText, key)
  expect(txt).toEqual(secret)
})

