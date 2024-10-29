import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";
import RootLayout from "./Componenets/RootLayout/RootLayout"
import Home from "./Pages/Home"
import Shop from "./Pages/Shop"
import Blog from "./Pages/Blog";

function App() {

  let router = createBrowserRouter(createRoutesFromElements(
    <Route element={<RootLayout />} >
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/blog" element={<Blog />} />
    </Route>
  ))


  return (
    <>
      <RouterProvider router={router}></RouterProvider>

    </>
  )
}

export default App
