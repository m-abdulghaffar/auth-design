import Head from "next/head";
import Button from "../components/button";
import Link from "next/link";
import Layout from "../components/layout";

export default function Signin() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Layout
        heading="Hi, Welcome Back!"
        subheading="Login with social media or your credentials"
        showBackButton={false}
      >
        <div className="flex flex-col gap-2 md:flex-row">
          <button className=" flex border1 basis-3/5 justify-center items-center">
            <img src="/Google.png" className="m-1"></img>
            <p className="font-bold text-sm mt-0.5">Sign in with Google</p>
          </button>
          <div className=" flex border1 basis-1/5 justify-center items-center">
            <Link href="#">
              <img src="/Linkedin.png"></img>
            </Link>
          </div>
          <div className="border1 flex basis-1/5 justify-center items-center">
            <Link href="#">
              <img src="/Twitter.png"></img>
            </Link>
          </div>
        </div>
        <p className="text-sm text-center m-3">or Sign in with Email</p>
        <div>
          <label className="text-sm">Email Address</label>
          <br></br>
          <input type="text" className="inputBorder"></input>
        </div>
        <div>
          <label className="text-sm">Password</label>
          <br></br>
          <input type="password" className="inputBorder"></input>
        </div>
        <div className="grid grid-cols-3 my-5">
          <div className="col-span-2">
            <input type="checkbox" className="accent-purple-500"></input>
            <label className="ml-2">Remember me</label>
          </div>
          <div>
            <Link href="#" className="text-sm">
              Forgot your password?
            </Link>
          </div>
        </div>
        <Button title="Sign In" />
        <p className="mt-3">
          Not registered yet?
          <Link href="./signup" className="text-purple-600 underline">
            Create an Account
          </Link>
        </p>
      </Layout>
    </>
  );
}
