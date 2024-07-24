import { Route, Routes } from "react-router-dom"
import { HomePage } from "./pages/HomePage/HomePage.tsx"
import { TodosPage } from "./pages/TodosPage/TodosPage.tsx"
import { PostsPage } from "./pages/PostsPage/PostsPage.tsx"
import { NavBar } from "./components/NavBar/NavBar"

function App() {
  return (
    <>
        <NavBar />
      <main>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="todos" element={<TodosPage />} />
          <Route path="posts" element={<PostsPage />} />
        </Routes>
      </main>
    </>
  )
}

export default App