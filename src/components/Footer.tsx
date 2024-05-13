import React from "react";
import MaxWithWrapper from "./MaxWithWrapper";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white h-20 relative">
      <MaxWithWrapper>
        <div className="border-t border-gray-200" />

        <div className="h-full flex flex-col md:flex-row md:justify-between justify-center items-center">
          <div className="text-center md:text-left pb-2 md:pb-0">
            <p className="text-sm text-muted-foreground">
              {/* &copy;{new Date().getFullYear()} All rights reserved */}
              &copy;{new Date().getFullYear()} 版权所有
            </p>
          </div>

          <div className="flex items-center justify-center">
            <div className="flex space-x-8">
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-gray-600"
              >
                条款
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-gray-600"
              >
                隐私政策
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-gray-600"
              >
                Cookie政策
              </Link>
            </div>
          </div>
        </div>
      </MaxWithWrapper>
    </footer>
  );
};

export default Footer;
