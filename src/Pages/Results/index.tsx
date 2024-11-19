import { Helmet } from "react-helmet";
import { useSearchParams } from "react-router-dom";

import { ThemeInterface } from "../../Modules/Interface/ThemeInterface";
import { useEffect, useState } from "react";
import { RandoFood } from "../../Modules/Shuffle";

export const ResultPage = (_child: ThemeInterface) => {
  const [param] = useSearchParams();
  const [seed, setSeed] = useState<number>(0);
  const [food, setFood] = useState<string>("");

  useEffect(() => {
    let i: number = 0;

    let x = setInterval(() => {
      if (i > 50) {
        clearInterval(x);
      } else {
        if (param.get("sp") != null) {
          RandoFood(Boolean(param.get("sp")), setFood);
        } else {
          RandoFood(false, setFood);
        }
        i++;
      }
    }, 50);
  }, [seed]);

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <Helmet>
        <title>แดกอะไรดี | หิวแดกข้าว เรื่องมากก็แดกตีนกูนี่แหละ ง่ายดี</title>
      </Helmet>

      <div className="text-5xl my-4">{food}</div>
      <button
        className="my-4 p-4 rounded-full bg-living-coral text-whitesmoke text-xl flex justify-center items-center"
        onClick={() => setSeed(Math.random())}
        id="refresh"
      >
        <img
          src="/refresh.svg"
          alt="refresh"
          className="w-[25px] h-auto mx-2"
        />{" "}
        สุ่มใหม่
      </button>
    </div>
  );
};
