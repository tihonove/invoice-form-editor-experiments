import React from 'react'
import { connect } from 'react-redux'

export default 
connect(
    state => ({ fullState: (state ? state.toJS() : null) })
)(
    function FullStateContainer({ dispatch, fullState, children }) {
        return <table style={{width: "100%"}}>
            <tbody>
                <tr>
                    <td style={{width: "50%"}}>
                        {children}
                    </td>
                    <td style={{width: "50%"}}>
                        <pre>{JSON.stringify(fullState, null, '  ')}</pre>
                    </td>
                </tr>
            </tbody>
        </table>
    })