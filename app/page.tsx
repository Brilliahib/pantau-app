"use client";
import { IconsBadge } from "@/components/badge/icons-badge";
import Button from "@/components/button/button";
import HeroImage from "@/public/img/hero.png";
import FarmerImage from "@/public/img/farmer.png";
import { AccordionDemo } from "@/components/accordion/accordion";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="flex md:min-h-[90vh] min-h-[65vh] flex-col items-center justify-between bg-[#1c6758] text-white pad-x">
        <div className="text-center flex flex-col space-y-8 items-center h-full pt-24">
          <div className="text-center flex flex-col items-center h-full space-y-4">
            <h1 className="md:text-5xl text-3xl text-center font-bold">
              Pantau Tumbuh Tanaman
            </h1>
            <p className="text-center max-w-lg">
              Pantau adalah aplikasi monitoring kelembapan serta pertumbuhan
              tanaman secara real time
            </p>
          </div>
          <Link href="/login">
            <Button>Coba Sekarang</Button>
          </Link>
        </div>
        <div className="items-end h-full justify-center">
          <Image
            src={HeroImage.src}
            alt=""
            width={640}
            height={420}
            loading="lazy"
          />
        </div>
      </section>

      <section className="flex flex-col justify-center py-24 pad-x">
        <div className="text-center flex flex-col justify-center items-center space-y-4 mb-20">
          <h1 className="font-bold md:text-3xl text-xl text-[#1c6758]">
            Features
          </h1>
          <p className="text-muted-foreground max-w-xl text-center">
            Pantau memiliki berbagai fitur yang pastinya dapat membantu anda
            dalam pemantauan tanaman{" "}
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:space-y-0">
          <div className="space-y-4">
            <IconsBadge>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8.25V18a2.25 2.25 0 0 0 2.25 2.25h13.5A2.25 2.25 0 0 0 21 18V8.25m-18 0V6a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6ZM7.5 6h.008v.008H7.5V6Zm2.25 0h.008v.008H9.75V6Z"
                />
              </svg>
            </IconsBadge>
            <div className="space-y-1">
              <h3 className="text-lg font-semibold">Monitoring</h3>
              <p className="text-muted-foreground">
                Memantau pertumbuhan dan kelembapan tanaman
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <IconsBadge>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
                />
              </svg>
            </IconsBadge>
            <div className="space-y-1">
              <h3 className="text-lg font-semibold">Analisa Pertumbuhan</h3>
              <p className="text-muted-foreground">
                Menganalisa terhadap pertumbuhan tanaman
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <IconsBadge>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                />
              </svg>
            </IconsBadge>
            <div className="space-y-1">
              <h3 className="text-lg font-semibold">Tips and Trick</h3>
              <p className="text-muted-foreground">
                Memberikan tips pertumbuhan dan perkembangan tanaman
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <IconsBadge>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 0 0-8.862 12.872M12.75 3.031a9 9 0 0 1 6.69 14.036m0 0-.177-.529A2.25 2.25 0 0 0 17.128 15H16.5l-.324-.324a1.453 1.453 0 0 0-2.328.377l-.036.073a1.586 1.586 0 0 1-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 0 1-5.276 3.67m0 0a9 9 0 0 1-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25"
                />
              </svg>
            </IconsBadge>
            <div className="space-y-1">
              <h3 className="text-lg font-semibold">Ramah Lingkungan</h3>
              <p className="text-muted-foreground">
                Mengoptimalisasi dengan cara yang ramah lingkungan
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pad-x md:py-24 py-8">
        <div className="bg-[#1c6758] grid grid-cols-1 text-center md:text-left md:grid-cols-2 rounded-xl h-full items-center">
          <div className="md:p-24 p-12 space-y-8 justify-center items-center h-full">
            <h1 className="md:text-3xl text-2xl font-bold md:max-w-xl leading-relaxed text-white">
              Berikan pertumbuhan yang baik bersama Pantau!
            </h1>
            <div className="flex justify-center md:justify-start">
              <Button>Coba Sekarang</Button>
            </div>
          </div>
          <div className="justify-center md:flex hidden">
            <Image
              src={FarmerImage.src}
              alt=""
              className="md:w-[400px]"
              width={2000}
              height={2000}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="pad-x md:py-12 py-8">
        <div className="text-center flex flex-col justify-center items-center space-y-4 mb-20">
          <h1 className="font-bold md:text-3xl text-xl text-[#1c6758]">FAQ</h1>
          <p className="text-muted-foreground max-w-xl text-center">
            Sebelum launching Aplikasi Pantau, berikut adalah gambaran umum
            tentang fitur dan manfaat aplikasi Pantau.
          </p>
        </div>
        <AccordionDemo />
      </section>
    </>
  );
}
