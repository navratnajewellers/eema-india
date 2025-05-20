import { ChevronDown } from "lucide-react";

const AnimatedSquare2 = () => {
  return (
    <div className="relative w-16 h-16 sm:w-24 sm:h-24 bg-orange-600 rotate-slow flex items-center justify-center">
      <div className=" absolute flex justify-center items-center rotate-slow-anticlock">
        {[...Array(4)].map((_, i) => (
          <span
            key={i}
            className={`absolute text-white text-xl animate-arrow-fall`}
            style={{
              animationDelay: `${i * 0.5}s`,
            }}
          >
            <ChevronDown size={35} />
          </span>
        ))}
      </div>
    </div>
  );
};

export default AnimatedSquare2;
