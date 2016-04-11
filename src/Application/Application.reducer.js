import { Map } from 'immutable'
import { patternMatch } from 'reelm/scopes'

import action from './Application.actions'
import invoiceReducer from '../Invoice/Invoice.reducer'
import invoiceEditFormReducer from '../InvoiceEditForm/InvoiceEditForm.reducer'

export default patternMatch(Map())
    .scopeTo(action.Invoice, ['invoice'], invoiceReducer)
    .scopeTo(action.InvoiceEditForm, { invoice: ['invoice'], form: ['invoiceEditForm'] }, invoiceEditFormReducer)


/*

function over = pathDefinition => reducer => (state, action) => state
function scoped => pattern => reducer => (state, action) => state
function conditional => pattern => reducer => (state, action) => state

scoped('pattern')(over(path)(reducer))
reducer => scoped('pattern.[Index]')( (state, { match, ...action }) => over(match.Index)(reducer)(state, action) )

*/