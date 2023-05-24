import React from 'react'
import nav from '../Menu_left_side.png'

const SidebarMenu = (props) => {
  return (
    <div {...props}>
        <img src={nav} alt="Sidebar menu" />
    </div>
  )
}

export default SidebarMenu