import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Index from "./pages/index"
import Conactus from "./pages/ConactUs"
import About from "./pages/about"
import Latest2 from "./pages/latest2"
import Latestnews from "./pages/latestnews"
import Services from "./pages/services"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />
  },
  {
    path: '/ConactUs',
    element: <Conactus />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/latest2',
    element: <Latest2 />
  },
  {
    path: '/latestnews',
    element: <Latestnews />
  },
  {
    path: '/services',
    element: <Services />
  },
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
