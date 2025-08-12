"use client"

import {useStoreUser} from "@/hooks/use-store-user";
import {BarLoader} from "react-spinners";
import Image from "next/image";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {Authenticated, Unauthenticated} from "convex/react";
import {SignInButton, SignUpButton, UserButton} from "@clerk/nextjs";
import {Button} from "@/components/ui/button";
import {LayoutDashboard} from "lucide-react";

const Header = () => {
  const {isLoading} = useStoreUser();
  const path = usePathname();

  return (
    <header className="fixed top-0 w-full border-b bg-white/95 backdrop-blur z-50 supports-[backdrop-filter]:bg-white/60 py-1">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src='/logos/logo.png'
            alt={process.env.NEXT_PUBLIC_APP_NAME}
            width={200}
            height={60}
            className="h-11 w-auto object-contain"
          />
        </Link>

        { path === '/' && (
            <div className="hidden md:flex items-center gap-6">
              <Link
                href="#features"
                className="text-sm font-medium hover: transition"
              >
                Features
              </Link>
              <Link
                href="#how-it-works"
                className="text-sm font-medium hover: transition"
              >
                How it works
              </Link>
            </div>
        )}

        <div className="flex items-center gap-4">
          <Authenticated>
            <Link href="/dashboard">
              <Button variant="outline" className="hidden md:inline-flex items-center gap-2 hover:text-green-700 hover:border-green-700 transition cursor-pointer">
                <LayoutDashboard className="h-4 w-4" />
                Dashboard
              </Button>
              <Button variant="ghost" className="md:hidden w-10 h-10 p-0 cursor-pointer">
                <LayoutDashboard className="h-4 w-4" />
              </Button>
            </Link>
            <UserButton />
          </Authenticated>
          <Unauthenticated>
            <SignInButton mode="auto">
              <Button variant="ghost">Sign In</Button>
            </SignInButton>
            <SignUpButton mode="auto">
              <Button className="bg-green-700 hover:bg-green-800 border-noe">Sign Up</Button>
            </SignUpButton>
          </Unauthenticated>
        </div>
      </nav>

      {isLoading && <BarLoader width={"100%"} color="#36d7b7" />}
    </header>
  )
}

export default Header;