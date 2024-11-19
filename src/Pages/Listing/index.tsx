import { Helmet } from "react-helmet";
import { ThemeInterface } from "../../Modules/Interface/ThemeInterface";
import { NotSpicy, Spicy } from "../../Modules/FoodData";

export const ListingPage = (_child: ThemeInterface) => {
  return (
    <div className="w-full h-screen">
      <Helmet>
        <title>แดกอะไรดี | หิวแดกข้าว เรื่องมากก็แดกตีนกูนี่แหละ ง่ายดี</title>
      </Helmet>

      <div className="w-[80%] h-screen mx-auto pt-20">
        <h1 className="my-2 text-4xl font-bold">รายการอาหาร</h1>
        <h2 className="my-2 ml-4 underline text-xl">อาหารเผ็ด</h2>
        <div className="flex flex-row flex-wrap justify-center gap-2 my-2">
          {Spicy.map((food: string) => {
            return (
              <p className="p-2 border-[1px] border-solid border-jet dark:border-whitesmoke text-jet dark:text-whitesmoke dark:bg-overlay bg-w-overlay rounded-full">
                {food}
              </p>
            );
          })}
        </div>
        <h2 className="my-2 ml-4 underline text-xl">อาหารไม่เผ็ด</h2>
        <div className="flex flex-row flex-wrap justify-center gap-2 my-2">
          {NotSpicy.map((food: string) => {
            return (
              <p className="p-2 border-[1px] border-solid border-jet dark:border-whitesmoke text-jet dark:text-whitesmoke dark:bg-overlay bg-w-overlay rounded-full">
                {food}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};
