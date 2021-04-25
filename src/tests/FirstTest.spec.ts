import { Cliente } from '@models/Cliente'

test('Should run', () => {
  const user = new Cliente()
  user.nome = 'henrique'

  expect(user.nome).toBe('henrique')
})
