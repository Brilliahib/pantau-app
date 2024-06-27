import Button from "@/components/button/button";
import Navbar from "@/components/nav/nav-bar";
import ErrorImage from "@/public/img/404.png";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center space-y-4 pad-x">
        <Image
          src={ErrorImage}
          alt="404"
          className="md:max-w-[450px] max-w-[400px]"
        />
        <div className="space-y-3 text-center">
          <h1 className="md:text-6xl text-4xl font-bold">404 Error</h1>
          <h3 className="md:text-xl text-md font-semibold">
            Oops! Something's went wrong!
          </h3>
          <p className="text-sm text-muted-foreground font-base">
            Seems like the page you're trying to open is not ready.
          </p>
        </div>
        <div>
          <Link href="/">
            <Button variant="secondary">Back to home</Button>
          </Link>
        </div>
      </div>
    </>
  );
}
