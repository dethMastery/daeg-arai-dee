import { Helmet } from "react-helmet";
import { ThemeInterface } from "../../Modules/Interface/ThemeInterface";
import { IndexImage } from "../../Components/IndexImage";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const HomePage = (child: ThemeInterface) => {
  const navigate = useNavigate();
  const [spicy, setSpicy] = useState<boolean>(false);

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <Helmet>
        <title>แดกอะไรดี | หิวแดกข้าว เรื่องมากก็แดกตีนกูนี่แหละ ง่ายดี</title>
      </Helmet>

      <div>
        <IndexImage theme={child.theme} />
      </div>
      <div className="text-center">
        <h1 className="text-3xl font-bold py-2">แดกอะไรดี</h1>
        <h4 className="text-xl font-normal italic opacity-60">
          หิวก็แดกข้าว เรื่องมากก็แดกตีนกูไปก่อนล่ะกัน
        </h4>
      </div>
      <div className="text-center py-2">
        {/* Handler */}
        <p className="text-center py-2 text-lg">กินเผ็ดป่าว</p>
        <div className="w-full flex justify-center items-center">
          <p className="mr-4">ไม่เผ็ด</p>
          <label className="switch">
            <input type="checkbox" onChange={() => setSpicy(!spicy)} />
            <span className="slider round"></span>
          </label>
          <p className="ml-4 mr-4">เผ็ด</p>
        </div>
        <button
          className="my-4 p-4 w-full rounded-full bg-living-coral text-whitesmoke flex flex-row justify-center items-center"
          onClick={() =>
            spicy ? navigate("/results?sp=true") : navigate("/results")
          }
        >
          สุ่มเลอ
        </button>
      </div>
    </div>
  );
};
