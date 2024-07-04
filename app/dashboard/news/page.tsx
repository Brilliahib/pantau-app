"use client";
import { AddNews } from "@/components/dialog/add-news";
import Navbar from "@/components/nav/nav-bar";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { db } from "@/lib/firebase/init";
import { collection, getDocs, Timestamp } from "firebase/firestore";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

interface Blog {
  id: string;
  title: string;
  content: string;
  photoURL: string;
  createdAt: Date;
}

const NewsPage = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const { data: session, status }: { data: any; status: string } = useSession(); // Use useSession from NextAuth.js
  const isAdmin = session?.user?.role === "admin";
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "blogs"));
        const blogsData = querySnapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            title: data.title,
            content: data.content,
            photoURL: data.photoURL,
            createdAt: data.createdAt.toDate(),
          };
        }) as Blog[];
        setBlogs(blogsData);
      } catch (error) {
        console.error("Error fetching blogs: ", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <>
      <Navbar />
      <div className="pad-x">
        <div className="py-4 space-y-4 md:space-y-0 md:flex md:justify-between md:items-center">
          <div>
            <h1 className="md:text-2xl font-bold text-xl">News</h1>
            <p className="md:text-md text-muted-foreground text-sm">
              Latest news on agriculture and plant technology.
            </p>
          </div>
          <div>{isAdmin && <AddNews />}</div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-4">
          {blogs.map((blog) => (
            <div key={blog.id}>
              <Link href={`/dashboard/news/${blog.id}`}>
                <div>
                  <div>
                    <Image
                      src={blog.photoURL}
                      alt={blog.title}
                      className="object-cover w-full max-h-[200px] rounded-xl"
                      width={600}
                      height={200}
                      priority={false}
                      loading="lazy"
                    />
                  </div>
                  <div className="space-y-2 mt-3">
                    <h1 className="text-base font-semibold text-black">
                      {blog.title}
                    </h1>
                    <p className="md:text-sm text-xs text-muted-foreground">
                      {blog.createdAt.toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default NewsPage;
