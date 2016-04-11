import React from 'react'
import { connect } from 'react-redux'
import { forwardTo } from 'reelm/scopes'

import actions from './Application.actions'
import InvoiceEditForm from '../InvoiceEditForm/InvoiceEditForm.view'

export default 
connect(
    state => ({
        invoice: state.get('invoice').toJS(),
        invoiceEditForm: state.get('invoiceEditForm').toJS()
    })
)(
    function Application({ dispatch, invoice, invoiceEditForm }) {
        return <div>
            <InvoiceEditForm 
                invoice={invoice}
                invoiceEditForm={invoiceEditForm}
                formDispatch={forwardTo(dispatch, actions.InvoiceEditForm)}
                dispatch={forwardTo(dispatch, actions.Invoice)}
                />
        </div>
    })