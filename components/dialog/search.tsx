import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import SearchIcons from "../button/search";
import VideoEdukasi from "@/lib/video";

export default function SearchButton() {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <div>
            <SearchIcons />
          </div>
        </DialogTrigger>
        <DialogContent className="md:max-w-[700px] max-w-[400px]">
          <DialogHeader className="mt-8">
            <div className="flex items-center gap-x-4">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#1c6758"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </div>
              <Input placeholder="Search news and education in here"></Input>
            </div>
          </DialogHeader>
          <div className="grid gap-3 py-4">
            <div>
              <h1 className="text-base font-semibold">Trending</h1>
            </div>
            <div>
              <div className="grid py-4 gap-x-4 gap-y-6">
                {VideoEdukasi.slice(0, 2).map((video) => (
                  <div key={video.id} className="flex items-center gap-x-4">
                    <iframe
                      src={video.src}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-[30%] h-[100px] rounded-xl"
                    ></iframe>
                    <div className="space-y-1">
                      <h1 className="md:text-base font-semibold text-black text-sm">
                        {video.title}
                      </h1>
                      <p className="text-muted-foreground md:text-sm text-xs">
                        {video.duration}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
