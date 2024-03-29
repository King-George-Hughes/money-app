import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import OurStory from "./pages/OurStory";
import Career from "./pages/Career";
import AboutUs from "./pages/AboutUs";
import HowItWorks from "./pages/HowItWorks";
import ContactUs from "./pages/ContactUs";
import Disclaimer from "./pages/Disclaimer";
import Benefits from "./pages/Benefits";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/our-story",
    element: <OurStory />,
  },
  {
    path: "/careers",
    element: <Career />,
  },
  {
    path: "/about-us",
    element: <AboutUs />,
  },
  {
    path: "/how-it-works",
    element: <HowItWorks />,
  },
  {
    path: "/contact-us",
    element: <ContactUs />,
  },
  {
    path: "/disclaimer",
    element: <Disclaimer />,
  },
  {
    path: "/benefits",
    element: <Benefits />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
