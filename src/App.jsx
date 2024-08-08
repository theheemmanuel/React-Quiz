import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Quiz from "./Quiz App/Quiz";

function App() {
  const Router = createBrowserRouter([
    {
      path: "/",
      element: <Quiz />,
    },
  ]);
  return <RouterProvider router={Router} />;
}

export default App;
