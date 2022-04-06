import React from 'react'

function DropdownItem(props) {
  return (
    <div className="dropdown-item" onClick={() => document.getElementById("items").style.display="none"}>{props.value}</div>
  )
}

export default DropdownItem