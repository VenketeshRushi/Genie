import Link from "next/link";
import UserAuthForm from "../../components/auth/user-auth-form";

export const metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
};

export default function AuthenticationPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="container relative hidden h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0 overflow-hidden rounded-[0.5rem] border bg-background shadow-md md:shadow-xl">
        <Link
          href="/login"
          className={"absolute right-4 top-4 md:right-8 md:top-8"}
        >
          Sign In
        </Link>
        <div className="relative hidden h-full flex-col bg-muted p-10 pt-6 text-white lg:flex dark:border-r">
          <div className="absolute inset-0 bg-zinc-900" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="48px"
              height="48px"
              className="mr-2"
            >
              <path
                fill="#c30000"
                d="M24,1c-3.314,0-6,1.791-6,4s2.686,4,6,4s6-1.791,6-4S27.314,1,24,1z"
              />
              <path
                fill="#71a0ff"
                d="M33,43c-4.7-2.9,0.5-12.7,2.4-15.9c5.1-0.8,7.6-3.4,7.6-6c0-4.3-6.6-8-15.3-8.8	c0.2-0.4,0.3-0.8,0.3-1.2c0-1.7-0.8-1.8-1-3.4l0,0c0-0.2,0-0.4,0-0.7c-1.7-1.2-3-4-3-4s-1.3,3-3,4c0,0.3,0,0.7,0.1,1H21	c0,1.4-1,1.4-1,3c0,0.4,0.1,0.8,0.3,1.2C11.6,13,5,16.7,5,21c0,2.7,2.4,5.1,7.1,6c0.6,4.2,3.8,20,18.9,20c8,0,11-4,11-4	S38.4,46.4,33,43z"
              />
              <linearGradient
                id="DEugXgyE5FPCqOMzR3eh~a"
                x1="23.858"
                x2="24.319"
                y1="10.686"
                y2="44.313"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset=".301" stopColor="#2b92f3" />
                <stop offset="1" stopColor="#1166d2" />
              </linearGradient>
              <path
                fill="url(#DEugXgyE5FPCqOMzR3eh~a)"
                d="M33,43c-4.7-2.9,0.5-12.7,2.4-15.9c5.1-0.8,7.6-3.4,7.6-6c0-4.3-6.6-8-15.3-8.8	c0.2-0.4,0.3-0.8,0.3-1.2c0-1.7-0.8-1.8-1-3.4l0,0c0-0.2,0-0.4,0-0.7c-1.7-1.2-3-4-3-4s-1.3,3-3,4c0,0.3,0,0.7,0.1,1H21	c0,1.4-1,1.4-1,3c0,0.4,0.1,0.8,0.3,1.2C11.6,13,5,16.7,5,21c0,2.7,2.4,5.1,7.1,6c0.6,4.2,3.8,20,18.9,20c8,0,11-4,11-4	S38.4,46.4,33,43z"
              />
              <path
                fill="#fab200"
                d="M24,14.8c0,0,3.5,0,3,4.8c3.6-2.8,6-2.6,6-2.6c0-1.7-1-2-1-2S29.3,14.2,24,14.8z"
              />
              <path
                fill="#c30000"
                d="M33.8,43.4c-0.2-0.1-0.5-0.3-0.8-0.4c-1.4-0.9-1.9-2.3-1.9-4.1c-2.8,3.7-8.1,4.5-10.7,4.6	c2.1,1.7,4.9,2.9,8.1,3.3C30.3,46.1,32.2,45,33.8,43.4z"
              />
              <path
                fill="#272727"
                d="M27,7c0,0,0.1,0.3,0.3,0.8c0.2,0.5,0.6,1.1,1,2c0.2,0.5,0.3,1,0.3,1.6c0,0.8-0.3,1.4-0.8,2	c-0.5,0.5-1.1,1-1.7,1.2C25.4,14.9,24.8,15,24,15h-0.5c-0.2,0-0.4,0-0.6-0.1c-0.3-0.1-0.7-0.2-1-0.3c-0.7-0.3-1.3-0.7-1.7-1.2	c-0.5-0.5-0.8-1.2-0.8-1.9v-0.3v-0.1V11c0-0.1,0-0.3,0.1-0.4c0.1-0.3,0.1-0.5,0.2-0.8c0.4-0.9,0.8-1.5,1-2C20.9,7.3,21,7,21,7	s0,0.1,0,0.2s0.1,0.4,0.1,0.6c0,0.6-0.2,1.3-0.3,2.2c0,0.2,0,0.4,0,0.6c0,0.1,0,0.2,0,0.3V11l0,0v0.1c0.1,0.3,0.3,0.6,0.6,0.9	c0.3,0.3,0.7,0.5,1.1,0.6c0.2,0.1,0.4,0.1,0.7,0.2c0.1,0,0.2,0,0.3,0c0.1,0,0.3,0,0.4,0c0.4,0,0.9-0.1,1.4-0.2	c0.4-0.1,0.8-0.3,1.1-0.6c0.3-0.3,0.5-0.6,0.6-0.9c0.1-0.4,0.1-0.8,0.1-1.2c-0.1-0.8-0.2-1.6-0.2-2.1C26.9,7.3,27,7,27,7z"
              />
              <path
                fill="#2163ff"
                d="M35.6,27h-0.1c-0.3,0.5-0.6,1.1-1,1.8c-0.2,0-0.5,0-0.8-0.1c-0.5-0.1-1.1-0.2-1.6-0.4	c-0.6-0.2-1.2-0.4-1.8-0.7c-0.6-0.3-1.3-0.6-1.9-1c-0.3-0.2-0.6-0.4-0.9-0.6s-0.6-0.5-0.9-0.7c-0.6-0.5-1.2-1-1.8-1.5	c-0.2-0.2-0.5-0.4-0.7-0.7c-0.2,0.2-0.5,0.4-0.7,0.7c-0.6,0.5-1.2,1-1.8,1.5c-0.3,0.2-0.6,0.5-0.9,0.7s-0.6,0.4-0.9,0.6	c-0.6,0.4-1.3,0.7-1.9,1s-1.2,0.5-1.8,0.7c-0.6,0.2-1.2,0.3-1.6,0.4c-0.5,0.1-0.9,0.1-1.2,0.2c-0.3,0-0.5,0.1-0.7,0.1	c-0.2-0.8-0.3-1.5-0.3-2c0.2,0,0.5,0,0.9,0c0.3,0,0.8,0,1.2-0.1s0.9-0.1,1.4-0.2c0.5-0.2,1.1-0.3,1.7-0.5s1.2-0.4,1.8-0.8	c0.3-0.2,0.6-0.3,0.9-0.5s0.6-0.4,0.9-0.6c0.6-0.4,1.2-0.8,1.8-1.3c1.2-0.9,2.4-1.9,3.5-2.8c0.6-0.4,1.1-0.9,1.7-1.2	c0.5-0.4,1.1-0.7,1.6-1s1-0.5,1.4-0.7c0.5-0.1,0.8-0.3,1.2-0.3c0.7-0.1,1-0.1,1-0.1s-0.4,0.1-1,0.2c-0.3,0.1-0.7,0.2-1.1,0.4	c-0.4,0.2-0.9,0.4-1.3,0.7c-0.5,0.3-1,0.7-1.4,1.1c-0.5,0.4-1,0.9-1.5,1.4c-0.6,0.6-1.2,1.2-1.9,1.8c0.2,0.2,0.4,0.3,0.7,0.5	c0.6,0.4,1.2,0.9,1.8,1.3c0.3,0.2,0.6,0.4,0.9,0.6s0.6,0.3,0.9,0.5c0.6,0.3,1.2,0.5,1.8,0.8c0.6,0.2,1.2,0.3,1.7,0.5	c0.5,0.1,1,0.2,1.4,0.2c0.4,0.1,0.8,0,1.2,0.1C35.2,27,35.4,27,35.6,27z M32,15c0,0-2.1-1-3.6-2.7c-0.1,0.4-0.3,0.7-0.6,1	c-0.5,0.5-1.1,1-1.7,1.2c-0.2,0.1-0.5,0.1-0.7,0.2C28.1,14.5,30.5,14.5,32,15z M23.5,14.9c-0.2,0-0.4,0-0.6-0.1	c-0.3-0.1-0.7-0.2-1-0.3c-0.7-0.3-1.3-0.7-1.7-1.2c-0.3-0.3-0.5-0.7-0.6-1.1c-1.6,2-4.5,4-8.6,4.8C11,17,17.5,15.6,23.5,14.9	L23.5,14.9z"
              />
            </svg>
            Genie
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;Revolutionize your project's foundation with effortlessly
                crafted database schemas powered by cutting-edge generative
                AI.&rdquo;
              </p>
              <footer className="text-sm">Team Genie</footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Create an account
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your email & password below to create your account
              </p>
            </div>
            <UserAuthForm />
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{" "}
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
