import logo from './logo.svg'
import './App.css'
import { Route, Router } from 'react-router-dom'
import PostListPage from './pages/PostListPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import WritePage from './pages/WritePage'
import PostPage from './pages/PostPage'
import { Routes } from '../node_modules/react-router-dom/index'
import { Helmet } from 'react-helmet-async'

function App() {
  return (
    <>
      <Helmet>
        <title>REACTERS</title>
      </Helmet>
      <Routes>
        <Route path="/@:username" element={<PostListPage />} exact />
        <Route path="/" element={<PostListPage />} exact />
        <Route element={<LoginPage />} path="/login" />
        <Route element={<RegisterPage />} path="/register" />
        <Route element={<WritePage />} path="/write" />
        <Route element={<PostPage />} path="/@:username/:postId" />
      </Routes>
    </>
  )
}

export default App
