import React from 'react'
import Link from 'next/link'

const Home = () => {
  return (
    <div className="flex gap-4"> 
      <Link href="/components/signin" className='btn'>Login</Link><br></br>
      <Link href="/components/signup" className='btn'>Signup</Link>
    </div>
  )
}

export default Home