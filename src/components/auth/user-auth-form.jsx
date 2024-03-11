"use client";

import React, { useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ImSpinner9 } from "react-icons/im";
import { IoLogoGithub } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { usePathname } from "next/navigation";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

function UserAuthForm({ className, ...props }) {
  const pathName = usePathname();
  const { data: session } = useSession();
  const [isLoading, setIsLoading] = useState(false);
  const [providers, setProviders] = useState(null);

  console.log("pathName", pathName);

  useEffect(() => {
    console.log("session", session);
    if (session === undefined) return;

    if (session && !session?.user?.uid) {
      // if session has no uid then user was not created. Sign out. This is when user signs in with google and has no role/invite
      return async () =>
        await signOut({ callbackUrl: session?.user?.redirect });
    }

    if (session) {
      router.push("/playground");
    }
    console.log("SESSION", session);
    const setUpProviders = async () => {
      console.log("setUpProviders", Date.now());
      const response = await getProviders();
      console.log("providers", response, Date.now());
      setProviders(response);
    };
    setUpProviders();
  }, [session]);

  async function onSubmit(event) {
    event.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }

  const hadnleAuth = async (id) => {
    try {
      signIn(id, {
        callback: () => {
          // alert("signedIn");
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Password
            </Label>
            <Input
              id="password"
              placeholder="Enter your password"
              type="password"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <Button disabled={isLoading}>
            {isLoading && <ImSpinner9 className="mr-2 h-4 w-4 animate-spin" />}
            Sign In
          </Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <div className="grid gap-2">
        <Button variant="outline" type="button" disabled={isLoading}>
          {isLoading ? (
            <ImSpinner9 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <FcGoogle className="mr-2 h-4 w-4" />
          )}{" "}
          Google
        </Button>
        <Button
          variant="outline"
          type="button"
          disabled={isLoading}
          onClick={hadnleAuth}
        >
          {isLoading ? (
            <ImSpinner9 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <IoLogoGithub className="mr-2 h-4 w-4" />
          )}{" "}
          GitHub
        </Button>
      </div>
    </div>
  );
}

export default UserAuthForm;
