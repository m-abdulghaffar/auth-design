import React from 'react'
import AuthHeader from '../auth-header'
import Button from '../button'
import Link from 'next/link'
const Signup = () => {
    return (
        <>
            <div className='flex flex-row'>
                <div>
                    <img src='/Frame.png' className='max-w-full h-screen'></img>
                </div>
                <div className="m-8">
                    <div className='container mx-auto p-4 max-w-full'>
                        <div className="flex items-center justify-end">
                            <img src="/maki_arrow.png" />
                            <Link href="/" className="text-gray-500">Back to Home</Link>
                        </div>
                        <AuthHeader heading="Hi, Welcome to My Wallet!"
                            subhead="Let's start by creating your account" />
                        <div>
                            <label className='text-sm'>Name</label><br></br>
                            <input type='text' className='inputBorder'></input>
                        </div>
                        <div>
                            <label className='text-sm'>Email Address</label><br></br>
                            <input type='text' className='inputBorder'></input>
                        </div>
                        <div>
                            <label className='text-sm'>Password</label><br></br>
                            <input type='password' className='inputBorder'></input>
                        </div>
                        <div className='my-5'>
                            <input type='checkbox' className='accent-purple-500'></input>
                            <label className="ml-2">I agree to the <Link href="#" className="text-purple-600">Terms and Conditions</Link></label>
                        </div>
                        <Button title="Sign Up" />
                        <p className="mt-3">Already have an account?
                            <Link href="./signin" className="text-purple-600 underline">Login</Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup