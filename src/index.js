import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import LayoutOperation, {
  loader as loaderLayout,
} from "./pages/Layout/layoutOperation";
import LayoutMain from "./pages/Layout/layoutMain";
import Home from "./pages/Home";
import ExercisesMain from "./pages/exercises/practiceHome";
import Difficult, {
  loader as loaderDifficult,
} from "./pages/exercises/dificult";
import Exercise, { loader as loaderExercise } from "./pages/exercises/exercise";
import LayoutMenuExplanation, {
  loader as loaderMenuExplanation,
} from "./pages/Layout/layoutMenuExplanation";
import Learn from "./pages/learn/learn";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { SoundProvider } from "./components/Sound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutMain />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "practica",
        element: <ExercisesMain />,
      },
    ],
  },
  {
    path: "/aprender/:operation/:page",
    element: <LayoutMenuExplanation />,
    loader: loaderMenuExplanation,
    children: [
      {
        path: "/aprender/:operation/:page",
        loader: loaderMenuExplanation,
        element: <Learn />,
      },
    ],
  },
  {
    path: "/dificultad/:operation",
    loader: loaderLayout,
    element: <LayoutOperation />,
    children: [
      {
        path: "/dificultad/:operation",
        element: <Difficult />,
        loader: loaderDifficult,
      },
      {
        path: ":difficult/ejercicios",
        element: <Exercise />,
        loader: loaderExercise,
      },
    ],
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <SoundProvider>
      <RouterProvider router={router} />
    </SoundProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
