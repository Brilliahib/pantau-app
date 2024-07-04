"use client";
import Navbar from "@/components/nav/nav-bar";
import { SkeletonDetailNews } from "@/components/skeleton/skeleton-detail-news";
import { db } from "@/lib/firebase/init";
import { doc, getDoc } from "firebase/firestore";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

interface Blog {
  id: string;
  title: string;
  content: string;
  photoURL: string;
  createdAt: Date;
}

const DetailNews = () => {
  const params = useParams();
  const id = params?.id;
  const [blog, setBlog] = useState<Blog | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDetailNews = async () => {
      try {
        const docRef = doc(db, "blogs", id as string);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          if (data) {
            const blogData: Blog = {
              id: docSnap.id,
              title: data.title,
              content: data.content,
              photoURL: data.photoURL,
              createdAt: data.createdAt.toDate(),
            };
            setBlog(blogData);
          }
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false); // Ensure isLoading is set to false regardless of success or failure
      }
    };

    if (id) {
      fetchDetailNews();
    }
  }, [id]);

  if (isLoading) {
    return (
      <div className="pad-x">
        <div>
          <SkeletonDetailNews />
        </div>
      </div>
    );
  }

  if (!blog) {
    return <div>Blog not found!</div>;
  }

  return (
    <>
      <Navbar />
      <div className="pad-x py-4">
        <div className="mb-4">
          {blog.photoURL && (
            <Image
              src={blog.photoURL}
              alt={blog.title}
              className="object-cover w-full max-h-[500px] rounded-xl"
              width={600}
              height={500}
              priority={false}
              loading="lazy"
            />
          )}
        </div>
        <div className="text-center space-y-2 mb-4">
          <h1 className="text-xl font-bold">{blog.title}</h1>
          <p className="text-muted-foreground text-sm">
            {blog.createdAt.toLocaleDateString()}
          </p>
        </div>
        <p className="mt-4 md:text-base text-sm leading-6 text-black">
          {blog.content}
        </p>
      </div>
    </>
  );
};

export default DetailNews;
