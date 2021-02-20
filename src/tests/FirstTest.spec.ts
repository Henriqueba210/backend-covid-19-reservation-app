import { User } from '@models/User'

test('Should run', () => {
  const user = new User('henrique', 'henrique@gmail.com')

  expect(user.name).toBe('henrique')
})
