import { AddNews } from "@/components/dialog/add-news";
import Navbar from "@/components/nav/nav-bar";

const NewsPage = () => {
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
          <div>
            <AddNews />
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsPage;
