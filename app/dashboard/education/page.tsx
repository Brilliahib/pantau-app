import Navbar from "@/components/nav/nav-bar";
import VideoEdukasi from "@/lib/video";

const EducationPage = () => {
  return (
    <>
      <div className="pad-x">
        <div className="py-4 space-y-1">
          <h1 className="md:text-2xl font-bold text-xl">Education</h1>
          <p className="md:text-md text-muted-foreground text-sm">
            Educational resources on plant care and cultivation.
          </p>
        </div>
        <div className="grid md:grid-cols-3 py-4 gap-x-4 md:gap-y-8 gap-y-6">
          {VideoEdukasi.map((video) => (
            <div key={video.id} className="md:block flex items-center gap-x-4">
              <iframe
                src={video.src}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-[50%] h-[100px] rounded-xl lg:w-full lg:h-[200px]"
              ></iframe>
              <div className="md:mt-4 space-y-1">
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
    </>
  );
};

export default EducationPage;
