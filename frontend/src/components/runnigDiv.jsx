const RunningDiv = () => {
  return (
    <div className="mt-5 h-28 w-full bg-black">
      <div className="w-screen relative overflow-hidden whitespace-nowrap">
        <div className=" text-white/70 text-center text-5xl font-bold animate-move">
          Motivation / Progress / Fitness / Transformation / Motivation /
          Progress / Fitness / Transformation / Motivation / Progress / Fitness
          / Transformation / Motivation / Progress / Fitness / Transformation
        </div>
      </div>
      <div className="mt-3 relative w-screen overflow-hidden whitespace-nowrap">
        <div className=" text-[#ff3333]/40 text-center text-5xl font-bold animate-moveReverse">
          Motivation / Progress / Fitness / Transformation / Motivation /
          Progress / Fitness / Transformation / Motivation / Progress / Fitness
          / Transformation / Motivation / Progress / Fitness / Transformation
        </div>
      </div>
    </div>
  );
};

export default RunningDiv;
