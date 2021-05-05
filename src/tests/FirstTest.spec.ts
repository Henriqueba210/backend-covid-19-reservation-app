import ClienteService from 'src/services/ClienteService'

test('Should run', () => {
  const user = new ClienteService()
  user.nome = 'henrique'

  expect(user.nome).toBe('henrique')
})
