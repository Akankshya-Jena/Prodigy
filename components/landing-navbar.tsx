"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import exp from "constants";

const font = Montserrat({ 
  weight: "600", 
  subsets: ["latin"] 
});

export const LandingNavbar = () => {
  const { isSignedIn } = useAuth();
  return (
    <nav className="p-4 bg-tranparent flex items-center justify-between">
      <Link href="/" className="flex items-center">
        <div className="relative h-8 w-8 mr-4">
          <Image 
            fill
            src="/logo.png"
            alt="Logo"
            />
        </div>
        <h1 className={cn("text-2xl font-bold text-white", font.className)}>Prodigy</h1>
      </Link>
      <div className="flex items-center gap-x-2">
        <Link href={isSignedIn ? "/dashboard" : "sign-up"}>
          <Button 
            variant="outline"
            className="rounded-full">Get Started</Button>
        </Link>
      </div>
    </nav>
  )

  }