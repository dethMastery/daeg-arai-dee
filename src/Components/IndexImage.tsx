import { ThemeInterface } from "../Modules/Interface/ThemeInterface";

export const IndexImage = (child: ThemeInterface) => {
  if (child.theme == "dark") {
    return <img src="/food-dark.svg" alt="food" className="w-[30vw] h-auto" />;
  } else {
    return <img src="/food.svg" alt="food" className="w-[30vw] h-auto" />;
  }
};
