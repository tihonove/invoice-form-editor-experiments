import React from 'react'
import { action } from 'utils'

import invoiceActions from '../Invoice/Invoice.actions'
import actions from './InvoiceEditForm.actions'

import { Button, Input, Checkbox } from 'ui'

export default function({ dispatch, formDispatch, invoice, invoiceEditForm }) {
    var onChange = dispatch::action(invoiceActions.Change, (data) => ({ data: data }))
    var onChangeForm = formDispatch::action(actions.Change, (data) => ({ data: data }))
    var onChangeInvoice = formDispatch::action('Invoice.' + invoiceActions.Change, (data) => ({ data: data }))
    var onClear = formDispatch::action('ConfirmedClear')
    
    //var onClear = dispatch::action(invoiceActions.Clear)
    //var onClear = formDispatch::action('Invoice.' + invoiceActions.Clear)

    return (<div>
            <div>Number: <Input value={invoice.number || ''} onChange={(e, v) => onChangeInvoice({ number: v })} /></div>
            <div><Checkbox 
                checked={invoiceEditForm.showOrderNumber}
                onChange={e => onChangeForm({ showOrderNumber: e.target.checked })}>Show editor for order number</Checkbox>
            </div>
            <div>
                <Button onClick={onClear}>Clear</Button>
            </div>
        </div>)
}