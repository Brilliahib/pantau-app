import Navbar from "@/components/nav/nav-bar";

const PantauPage = () => {
  return (
    <>
      <Navbar />
      <div className="pad-x">
        <div className="py-4 space-y-1">
          <h1 className="md:text-2xl font-bold text-xl">Pantau</h1>
          <p className="md:text-md text-muted-foreground text-sm">
            Monitor and track plant growth and soil conditions.
          </p>
        </div>
      </div>
    </>
  );
};

export default PantauPage;
