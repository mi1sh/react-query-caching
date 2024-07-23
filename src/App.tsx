import { Route, Routes } from "react-router-dom"
import { HomePage } from "./pages/HomePage"
import { GalleryPage } from "./pages/GalleryPage"
import { PostsPage } from "./pages/PostsPage"
import { NavBar } from "./components/NavBar/NavBar"

function App() {
  return (
    <>
        <NavBar />
      <main>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="posts" element={<PostsPage />} />
        </Routes>
      </main>
    </>
  )
}

export default App