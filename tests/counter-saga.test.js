import 'regenerator/runtime'
import counterSaga, { delay } from '../src/sagas/counter-saga'
import { take, put, call } from 'redux-saga/effects'


describe('Counter saga', () => {

    it('should asynchronously increment value', () => {
        var saga = counterSaga();
        expect(saga.next().value).toEqual(take(['Counter/IncrementAsync', 'Counter/DecrementAsync']));
        
        var fork = saga.next({ type: 'Counter/IncrementAsync' }).value;
        expect(fork.FORK).toBeDefined();
        var forkSaga = fork.FORK.fn({ type: 'Counter/IncrementAsync' });

        expect(forkSaga.next().value).toEqual(call(delay, 1000));
        expect(forkSaga.next().value).toEqual(put({ type: 'Counter/Increment' }));
    })

})
