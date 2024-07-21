import React from 'react'
import Card from '../sub/Card'


const LCardSection = () => {
  return (
    <div className='w-full my-10'>
    <h1 className="font-bold text-xl">Mechanice Science</h1>
    <div className='w-full mt-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-5'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
    </div>
    </div>
  )
}

export default LCardSection
