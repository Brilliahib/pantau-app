import { notFound } from "next/navigation";
import NavItems from "@/lib/constants"; // Sesuaikan dengan path yang sesuai
import Navbar from "@/components/nav/nav-bar";

interface Props {
  params: {
    page: string;
  };
}

export async function generateStaticParams() {
  return NavItems.filter((item) => item.href.startsWith("/dashboard")).map(
    (item) => ({
      page: item.href.split("/").pop(),
    })
  );
}

export async function generateMetadata({ params }: Props) {
  const item = NavItems.find(
    (item) => item.href === `/dashboard/${params.page}`
  );

  if (!item) {
    return {
      title: "Page Not Found",
    };
  }

  return {
    title: item.name,
  };
}

const Page = ({ params }: Props) => {
  const item = NavItems.find(
    (item) => item.href === `/dashboard/${params.page}`
  );

  if (!item) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <div className="pad-x">
        <div className="py-4 space-y-1">
          <h1 className="md:text-2xl font-bold text-xl">{item.name}</h1>
          <p className="md:text-md text-muted-foreground text-sm">
            {item.desc}
          </p>
        </div>
      </div>
    </>
  );
};

export default Page;
