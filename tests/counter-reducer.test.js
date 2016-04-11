import counterReducer from '../src/reducers/counter-reducer'

describe('Counter reducer', () => {
    it('should return 0 in initial run', () => {
        expect(counterReducer()).toEqual({ counterValue: 0 });
    })

    it('should return state without action', () => {
        expect(counterReducer({ counterValue: 1 })).toEqual({ counterValue: 1 });
    })
    
    it('should modify action', () => {
        expect(counterReducer({ counterValue: 1 }, { type: 'Counter/Increment' })).toEqual({ counterValue: 2 });
        expect(counterReducer({ counterValue: 1 }, { type: 'Counter/Decrement' })).toEqual({ counterValue: 0 });
    })
})