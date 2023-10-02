import React from "react";
import AuthHeader from "../components/auth-header";
import Button from "../components/button";
import Link from "next/link";
import Layout from "../components/layout";
const Signup = () => {
  return (
    <>
      
      <Layout
        heading="Hi, Welcome to My Wallet!"
        subheading="Let's start by creating an account"
        showBackButton={true}
      >
        
        <div>
          <label className="text-sm">Name</label>
          <br></br>
          <input type="text" className="inputBorder"></input>
        </div>
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
        <div className="my-5">
          <input type="checkbox" className="accent-purple-500"></input>
          <label className="ml-2">
            I agree to the{" "}
            <Link href="#" className="text-purple-600">
              Terms and Conditions
            </Link>
          </label>
        </div>
        <Button title="Sign Up" />
        <p className="mt-3">
          Already have an account?
          <Link href="./signin" className="text-purple-600 underline">
            Login
          </Link>
        </p>
      </Layout>
    </>
  );
};

export default Signup;
