import React from 'react'
import pageTitleimg from '../Page_title_bread_crumbs.svg'

const PageTitle = (props) => {
  return (
    <div {...props}>
        <img src={pageTitleimg} alt="page title" />
    </div>
  )
}

export default PageTitle