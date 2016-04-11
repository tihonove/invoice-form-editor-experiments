import { Map } from 'immutable'
import { patternMatch } from 'reelm/scopes'
import { effected } from 'reelm'
import { select, noop, put } from 'reelm/effects'
import invoiceReducer from '../Invoice/Invoice.reducer'

export default patternMatch(Map({ invoice: undefined, form: Map() }))
    .scopeTo('Invoice', ['invoice'], invoiceReducer)
    .caseExact('Change', (state, { data }) => effected(state.mergeDeepIn(['form'], data), noop()))
    .caseExact('ConfirmedClear', (state) => effected(state, function*() {
        var state = yield select();
        console.log(state.toJS())
        if (confirm('Clear invoice?'))
            yield put({ type: 'Invoice.Clear' })
    }))
