import { generatePassword, PasswordGeneratorProps, checkPasswordStrength } from '../Security/PasswordGenerator'

test('Confirm password length', () => {
  const props: PasswordGeneratorProps = {
    length: 150,
    symbols: true,
    lowercase: true,
    uppercase: true,
    numbers: true,
    exclude: ''
  }
  const passwd = generatePassword(props)
  expect(passwd.length).toEqual(props.length)
})

test('Exclude chars', () => {
  const props: PasswordGeneratorProps = {
    length: 50,
    symbols: false,
    lowercase: true,
    uppercase: false,
    numbers: false,
    exclude: 'abcdefg'
  }

  for (let i = 0; i < 50; i++) {
    const passwd = generatePassword(props)
    expect(passwd).not.toContain('a')
    expect(passwd).not.toContain('b')
    expect(passwd).not.toContain('c')
    expect(passwd).not.toContain('d')
    expect(passwd).not.toContain('e')
    expect(passwd).not.toContain('f')
    expect(passwd).not.toContain('g')
  }
})

test('Exclude all chars', () => {
  const props: PasswordGeneratorProps = {
    length: 50,
    symbols: false,
    lowercase: true,
    uppercase: false,
    numbers: false,
    exclude: 'abcdefghijklmnopqrstuvwxyz'
  }

  const passwd = generatePassword(props)
  expect(passwd).toEqual('')
})

test('Include all types', () => {
  let props: PasswordGeneratorProps = {
    length: 50,
    lowercase: true,
    symbols: true,
    uppercase: true,
    numbers: true,
    exclude: ''
  }

  for (let i = 0; i < 20; i++) {
    const passwd = generatePassword(props)
    expect(passwd).toMatch(new RegExp('[a-z]', 'g'))
    expect(passwd).toMatch(new RegExp('[A-Z]', 'g'))
    expect(passwd).toMatch(new RegExp('[0-9]', 'g'))
    expect(passwd).toMatch(new RegExp('[!@#$%\^&_\*]', 'g'))
  }

  props = {
    length: 50,
    lowercase: true,
    symbols: false,
    uppercase: true,
    numbers: true,
    exclude: ''
  }

  for (let i = 0; i < 20; i++) {
    const passwd = generatePassword(props)
    expect(passwd).toMatch(new RegExp('[a-z]', 'g'))
    expect(passwd).toMatch(new RegExp('[A-Z]', 'g'))
    expect(passwd).toMatch(new RegExp('[0-9]', 'g'))
    expect(passwd).not.toMatch(new RegExp('[!@#$%\^&_\*]', 'g'))
  }

  props = {
    length: 50,
    lowercase: true,
    symbols: false,
    uppercase: false,
    numbers: true,
    exclude: ''
  }

  for (let i = 0; i < 20; i++) {
    const passwd = generatePassword(props)
    expect(passwd).toMatch(new RegExp('[a-z]', 'g'))
    expect(passwd).not.toMatch(new RegExp('[A-Z]', 'g'))
    expect(passwd).toMatch(new RegExp('[0-9]', 'g'))
    expect(passwd).not.toMatch(new RegExp('[!@#$%\^&_\*]', 'g'))
  }

  props = {
    length: 50,
    lowercase: true,
    symbols: false,
    uppercase: false,
    numbers: false,
    exclude: ''
  }

  for (let i = 0; i < 20; i++) {
    const passwd = generatePassword(props)
    expect(passwd).toMatch(new RegExp('[a-z]', 'g'))
    expect(passwd).not.toMatch(new RegExp('[A-Z]', 'g'))
    expect(passwd).not.toMatch(new RegExp('[0-9]', 'g'))
    expect(passwd).not.toMatch(new RegExp('[!@#$%\^&_\*]', 'g'))
  }

  // Force lowercase
  props = {
    length: 50,
    lowercase: false,
    symbols: false,
    uppercase: false,
    numbers: false,
    exclude: ''
  }

  for (let i = 0; i < 20; i++) {
    const passwd = generatePassword(props)
    expect(passwd).toMatch(new RegExp('[a-z]', 'g'))
    expect(passwd).not.toMatch(new RegExp('[A-Z]', 'g'))
    expect(passwd).not.toMatch(new RegExp('[0-9]', 'g'))
    expect(passwd).not.toMatch(new RegExp('[!@#$%\^&_\*]', 'g'))
  }

})

test('Check password strength', () => {
  const data = [
    { pass: '', expected: { contains: [], length: 0, id: 0, value: 'Too Weak' } },
    { pass: '1', expected: { contains: ["number"], length: 1, id: 0, value: 'Too Weak' } },
    { pass: '1a', expected: { contains: ["lowercase", "number"], length: 2, id: 0, value: 'Too Weak' } },
    { pass: '1A', expected: { contains: ["uppercase", "number"], length: 2, id: 0, value: 'Too Weak' } },
    { pass: 'aA', expected: { contains: ["lowercase", "uppercase"], length: 2, id: 0, value: 'Too Weak' } },
    { pass: '1aA', expected: { contains: ["lowercase", "uppercase", "number"], length: 3, id: 0, value: 'Too Weak' } },
    { pass: '1aA@', expected: { contains: ["lowercase", "uppercase", "number", "symbol"], length: 4, id: 0, value: 'Too Weak' } },
    { pass: '1aA@asdzxc', expected: { contains: ["lowercase", "uppercase", "number", "symbol"], length: 10, id: 0, value: 'Weak' } },
    { pass: '1aA@asdqwertyyuihjk', expected: { contains: ["lowercase", "uppercase", "number", "symbol"], length: 19, id: 0, value: 'Strong' } },
    { pass: '1aA@asdqwertyyuihjk1aA@asdqk', expected: { contains: ["lowercase", "uppercase", "number", "symbol"], length: 28, id: 0, value: 'Strong' } },
    { pass: '1aA@asdqwertyyuihjk1aA@asdqk1234', expected: { contains: ["lowercase", "uppercase", "number", "symbol"], length: 32, id: 0, value: 'Very Strong' } },
    { pass: '1aA@asdqwertyyuihjk1aA@asdqwertyyuihjk', expected: { contains: ["lowercase", "uppercase", "number", "symbol"], length: 38, id: 0, value: 'Very Strong' } },
    { pass: 'aA@asdqwertyyuihjkaA@asdqwertyyuihjk', expected: { contains: ["lowercase", "uppercase", "symbol"], length: 36, id: 0, value: 'Very Strong' } },
    { pass: '1a@asdqwertyyuihjk1a@asdqwertyyuihjk', expected: { contains: ["lowercase", "number", "symbol"], length: 36, id: 0, value: 'Very Strong' } },
    { pass: '1aAasdqwertyyuihjk1aAasdqwertyyuihjk', expected: { contains: ["lowercase", "uppercase", "number"], length: 36, id: 0, value: 'Very Strong' } },
    { pass: 'abcdefgHIJKLMNOP1234567890123456789', expected: { contains: ["lowercase", "uppercase", "number"], length: 35, id: 0, value: 'Medium' } },
    { pass: 'abcdefgHIJKLMNOP123456789012345678@', expected: { contains: ["lowercase", "uppercase", "number", "symbol"], length: 35, id: 0, value: 'Very Strong' } },
    { pass: 'abcdefgHIJKLMNOP12345678901234567890', expected: { contains: ["lowercase", "uppercase", "number"], length: 36, id: 0, value: 'Very Strong' } },
  ]

  data.forEach((t) => {
    const r = checkPasswordStrength(t.pass)
    expect(r.length).toEqual(t.expected.length)
    expect(r.value).toEqual(t.expected.value)
    expect(r.contains).toEqual(t.expected.contains)
  })
})