import React from 'react'
export default function Ending1() {

    return (<>
        <div className="Ending end1">
        <h2 className="h4">to be continued</h2>
        <h5>last updated: {(new Date()).toUTCString().substring(0,16)}</h5>
        </div>
       
        </>
    )
}
