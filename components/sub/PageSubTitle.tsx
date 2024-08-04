import React from 'react'

interface PageSubTitleProps {
    title? : string
}
const PageSubTitle = ({title}: PageSubTitleProps) => {
  return (
    <h1 className="text-xl font-semibold ">{title}</h1>
  )
}

export default PageSubTitle
