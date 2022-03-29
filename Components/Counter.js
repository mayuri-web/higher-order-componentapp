import React, { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0);

  return (
    <div>
        <h4>
            {count}
        </h4>
        <button onClick={()=>setCount(count + 1)}>Add count</button>
    </div>
  )
}

export default Counter
