import { StateSchema } from 'app/providers/StoreProvider'
import { getLoginLoading } from './getLoginLoading'

describe('getLoginLoading', () => {
  test('should return loading', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: '',
        password: '',
        isLoading: true
      }
    }
    expect(getLoginLoading(state as StateSchema)).toEqual(true)
  })
  test('with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getLoginLoading(state as StateSchema)).toEqual(false)
  })
})
