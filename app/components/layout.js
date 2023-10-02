import React from "react";
import AuthHeader from "./auth-header";
import Link from "next/link";
const Layout = ({ heading, subheading, showBackButton, children }) => {
  const show = showBackButton;
  return (
    <>
      <div className="flex">
        <div className="bg-[#FCF8F5] items-center hidden lg:flex">
          <img src="/Frame.png" className="max-w-full h-auto"></img>
        </div>
        <div className="m-8">
          <div className="container mx-auto p-4 max-w-full">
            {show && (
              <div className="flex items-center justify-end">
                <img src="/maki_arrow.png" className="h-9 w-9" />
                <Link href="/" className="text-gray-500">
                  Back to Home
                </Link>
              </div>
            )}
            <AuthHeader heading={heading} subhead={subheading} />
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
