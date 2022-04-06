import React from 'react'
import DropdownItem from './DropdownItem'

function Dropdown(props) {
  
  return (
    <div>
      <div className="select" onMouseOver={()=>document.getElementById("items").style.display="block"}>
      Select
     
    </div>
    <div id="items">     
    {
      props.array.map((val, i) =>{
        return <DropdownItem key={i} value={val} />
      })
    }
   </div>
   </div>
    
  )
}

export default Dropdown