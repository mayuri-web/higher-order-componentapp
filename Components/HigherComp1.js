import React from 'react'

function HighComponent(props) {
  return (
    <div>
        <h3>Counter one</h3>
        <props.comp />
    </div>
  )
}

export default HighComponent
