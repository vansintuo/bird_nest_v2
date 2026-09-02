import { createBrowserRouter } from "react-router"
import Root from "./Root"
import Home from "./pages/Home"
import ProcessPage from "./pages/Process"
import QualityPage from "./pages/Quality"
import BlogPage from "./pages/Blog"
import FaqPage from "./pages/FAQ"
import AboutPage from "./pages/AboutUse"

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "our-process", Component: ProcessPage },
      { path: "quality", Component: QualityPage },
      { path: "blog", Component: BlogPage },
      { path: "faq", Component: FaqPage },
      { path: "about-use", Component: AboutPage },
    ],
  },
])
