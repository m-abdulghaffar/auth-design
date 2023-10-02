import AuthHeader from '../auth-header'
import Button from '../button'
import Link from 'next/link'
export default function Signin() {
  return (
    <>
      <div className='flex flex-row'>
        <div>
          <img src='/Frame.png' className='max-w-full h-screen'></img>
        </div>
        <div className="m-8">
          <div className='container mx-auto p-4 max-w-full'>
            <AuthHeader heading="Hi, Welcome Back!" subhead="Login with social media or your credentials" />
          
          <div className='flex flex-row gap-2 md:flex-row'>
            <button className=' flex border1 basis-3/5 justify-center items-center'>
              <img src='/Google.png' className='m-1'></img>
              <p className='font-bold text-sm mt-0.5'>Sign in with Google</p>
            </button>
            <div className=' flex border1 basis-1/5 justify-center items-center'>
              <Link href="#"><img src='/Linkedin.png'></img></Link>
              
            </div>
            <div className='border1 flex basis-1/5 justify-center items-center'>
              <Link href="#"><img src='Twitter.png'></img></Link>
            </div>
          </div>
          <p className='text-sm text-center m-3'>or Sign in with Email</p>
          <div>
          <label className='text-sm'>Email Address</label><br></br>
          <input type='text' className='inputBorder'></input>
          </div>
          <div>
          <label className='text-sm'>Password</label><br></br>
          <input type='password' className='inputBorder'></input>
          </div>
          <div className='grid grid-cols-3 my-5'>
            <div className='col-span-2'>
              <input type='checkbox' className='accent-purple-500'></input>
              <label className="ml-2">Remember me</label>
            </div>
            <div>
              <Link  href='#' className='text-sm'>Forgot your password?</Link>
            </div>
          </div>
          <Button title="Sign In" />
          <p className="mt-3">Not registered yet? 
          <Link href="./signup" className="text-purple-600 underline">Create an Account</Link></p>
        </div>
      </div>
      </div>
    </>
  )
}
