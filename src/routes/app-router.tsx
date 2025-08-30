import { lazy } from "react"
import { Route, Routes } from "react-router"

const App = lazy(() => import("@/app"))

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  )
}
