import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const MCard = () => {
  return (
    <div className='w-full p-3 rounded border' style={{background: '#fff'}}>
      <div className='flex justify-between'>
        <div>
            <h1 className='text-xl font-medium'>January Month</h1>
            <p className='text-xs text-[#878787]'>4 week, 6 day, 6 video,2 pdf </p>
        </div>
        <div>1</div>
      </div>

      <div className='grid grid-cols-3 gap-3 mt-4'>
        <div className=' w-full'>
            <Image
            src="https://res.cloudinary.com/dldtrjalo/image/upload/v1723019845/dna_kliiab.png"
            className='w-full col-span-1'
            width={500}
            height={500}
            alt="Picture of the author"
            />
        </div>
        <div className='col-span-2'>
            <h1 className='text-xl font-medium'>Summery</h1>
            <div>
                <li className='text-sm text-[#878787]'>
                Applied Theoretical Organic 
                Chemistry
                </li>
                <li className='text-sm text-[#878787]'>
                Applied Theoretical Organic 
                Chemistry
                </li>
                <li className='text-sm text-[#878787]'>
                Applied Theoretical Organic 
                Chemistry
                </li>
            </div>
        </div>
      </div>

      <div> <Link href={`class`} className="bg-[#2C9AFF] font-semibold text-white px-4 py-1 rounded">
            Watch Now
          </Link></div>
    </div>
  )
}

export default MCard
