import { Map } from 'immutable'
import { patternMatch } from 'reelm/scopes'
import { effected } from 'reelm'
import { noop } from 'reelm/effects'

import actions from './Invoice.actions'

const initialState = Map();

export default patternMatch(initialState)
    .caseExact(actions.Change, (invoice, { data }) => effected(invoice.mergeDeep(data), noop()))
    .caseExact(actions.Clear, () => effected(initialState, noop()));
