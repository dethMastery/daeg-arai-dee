import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ErrorPage } from "./Pages/Errors/Index";

import { HomePage } from "./Pages/Home";
import { ResultPage } from "./Pages/Results";

import { ThemeInterface } from "./Modules/Interface/ThemeInterface";

export const Router = (child: ThemeInterface) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage theme={child.theme} />} />
        <Route path="/results" element={<ResultPage theme={child.theme} />} />

        {/* Error Handling */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};
