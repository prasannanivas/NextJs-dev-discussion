"use client";

import Link from "next/link";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Input,
  Button,
  Avatar,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";

import { signIn, signOut } from "@/actions";
import { useSession } from "next-auth/react";

export default function HeaderAuth() {
  let authContent: React.ReactNode;
  const session: any = useSession();

  if (session.status === "loading") {
    authContent = null;
  } else {
    if (session.data?.user) {
      authContent = (
        <Popover placement="left">
          <PopoverTrigger>
            <Avatar src={session.data.user.image || ""} />
          </PopoverTrigger>
          <PopoverContent>
            <div className="p-4">
              <form action={signOut}>
                <Button type="submit">Sign Out</Button>
              </form>
            </div>
          </PopoverContent>
        </Popover>
      );
    } else {
      authContent = (
        <>
          <NavbarItem>
            <form action={signIn}>
              <Button type="submit" color="secondary" variant="bordered">
                Sign In
              </Button>
            </form>
          </NavbarItem>
          <NavbarItem>
            <form action={signIn}>
              <Button type="submit" color="primary" variant="bordered">
                Sign Up
              </Button>
            </form>
          </NavbarItem>
        </>
      );
    }
  }

  return authContent;
}
