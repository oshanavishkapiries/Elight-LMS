"use client"
import  Card  from '@/components/main/dashboard/class/Card'
import  MCard  from '@/components/main/dashboard/class/MCard'
import React from 'react'
import { institut } from '../data'
import { useRouter } from 'next/router'
const page = ({params}:any) => {
  const id = Number(params.classId) - 1

  return (
    <div className='p-3'>
      <Card {...institut[id]} />
      <div className='mt-5 grid grid-cols-4 gap-5'>
        <MCard/>
        <MCard/>
      </div>
    </div>
  )
}

export default page
