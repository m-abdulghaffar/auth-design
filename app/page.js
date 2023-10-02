import React from 'react'
import Link from 'next/link'

const Home = () => {
  return (
    <div className="flex gap-4"> 
      <Link href="/signin" className='btn'>Login</Link><br></br>
      <Link href="/signup" className='btn'>Signup</Link>
    </div>
  )
}

export default Home