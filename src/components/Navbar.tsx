import React from "react";
import MaxWithWrapper from "./MaxWithWrapper";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { auth, signIn, signOut } from "@/auth";

import { buttonVariants, Button } from "./ui/button";

const Navbar = async () => {
  // 从session中获取登录信息
  const session = await auth();
  console.log("session", session);

  const isAdmin = session?.user?.id === process.env.ADMIN_ID;
  return (
    <nav className="sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWithWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link href="/" className="flex z-40 font-semibold">
            蜗小<span className="text-green-600">壳</span>
          </Link>

          <div className="h-full flex items-center space-x-4">
            {session?.user ? (
              <>
                <form
                  action={async () => {
                    "use server";
                    // 退出登录后，重定向首页
                    await signOut({ redirectTo: "/" });
                  }}
                >
                  <Button variant="ghost" size="sm">
                    退出登录
                  </Button>
                </form>
                {isAdmin ? (
                  <Link
                    href="/api/auth/logout"
                    className={buttonVariants({ size: "sm", variant: "ghost" })}
                  >
                    控制面板 ✨
                  </Link>
                ) : null}
                <div className="h-8 w-px bg-zinc-200 hidden sm:block"></div>
                <Link
                  href="/configure/upload"
                  className={buttonVariants({
                    size: "sm",
                    className: "hidden sm:flex items-center gap-1",
                  })}
                >
                  定制手机壳
                  <ArrowRight className="ml-1.5 h-5 w-5" />
                </Link>
              </>
            ) : (
              <>
                {/* <Link
                  href="/api/auth/register"
                  className={buttonVariants({ size: "sm", variant: "ghost" })}
                >
                  注册
                </Link> */}
                <form
                  action={async () => {
                    "use server";
                    // 登录完成后，重定向到user页面
                    await signIn("gitee", { redirectTo: "/" });
                  }}
                >
                  <Button variant="ghost" size="sm">
                    登录
                  </Button>
                </form>

                <div className="h-8 w-px bg-zinc-200 hidden sm:block"></div>

                <Link
                  href="/configure/upload"
                  className={buttonVariants({
                    size: "sm",
                    className: "hidden sm:flex items-center gap-1",
                  })}
                >
                  定制手机壳
                  <ArrowRight className="ml-1.5 h-5 w-5" />
                </Link>
              </>
            )}
          </div>
        </div>
      </MaxWithWrapper>
    </nav>
  );
};

export default Navbar;
