import React from 'react'

function HigherComp2(props) {
  return (
    <div>
      <h3>Counter 2</h3>
      {<props.comp />}
    </div>
  )
}

export default HigherComp2
