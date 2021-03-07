import React from 'react'
export default function Ending1() {

    return (<>
        <div className="Ending end1">
            <div className="line-border"></div>
        <h2 className="h4">-The End-</h2>
        <h5>last updated: {(new Date()).toUTCString().substring(0,16)}</h5>
        </div>
       
        </>
    )
}
