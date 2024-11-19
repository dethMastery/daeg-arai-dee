import { ThemeIcon } from "../Modules/Theme";

interface NavBarChildInterface {
  switch: () => void;
  theme: string;
}

export const NavBar = (child: NavBarChildInterface) => {
  return (
    <div className="w-full top-0 left-0 flex flex-row bg-living-coral text-whitesmoke absolute">
      <div className="w-full flex flex-row">
        <a
          className="py-6 px-4 hover:bg-w-overlay hover:opacity-60 hover:cursor-pointer"
          id="home"
        >
          แดกอะไรดี
        </a>
      </div>
      <div className="w-[10%] md:w-full flex flex-row justify-end">
        <a className="py-6 px-4 hover:bg-w-overlay hover:opacity-60 hover:cursor-pointer">
          เมนูทั้งหมด
        </a>
        <button
          className="py-6 px-4 hover:bg-w-overlay hover:opacity-60 hover:cursor-pointer"
          onClick={child.switch}
        >
          {ThemeIcon(child.theme)}
        </button>
      </div>
    </div>
  );
};
