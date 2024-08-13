"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="wrapper flex items-center justify-between border-b ">
      <Link href="/">
        <Image
          src="/assets/images/logo.svg"
          alt="evently-logo"
          width={140}
          height={40}
        />
      </Link>

      <SignedIn>
        <nav className="md:flex-between hidden w-full max-w-xs">
          <NavItems />
        </nav>
      </SignedIn>

      <div className="flex w-32 justify-end gap-3">
        <SignedIn>
          <UserButton afterSwitchSessionUrl="/" />
          <MobileNav />
        </SignedIn>
        <SignedOut>
          <Button asChild className="rounded-full" size="lg">
            <Link href="/sign-in">Login</Link>
          </Button>
        </SignedOut>
      </div>
    </header>
  );
};

export default Header;
