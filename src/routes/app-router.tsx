import { lazy } from "react"
import { Route, Routes } from "react-router"

const App = lazy(() => import("@/app"))
const AvailableCourses = lazy(() => import("@/components/available-courses/available-courses"))

export default function AppRouter() {
  return (
    <Routes>
      <Route element={<App />}>
        <Route path="/" element={<AvailableCourses />} />
        <Route path="/test" element={<p>test</p>} />
      </Route>
    </Routes>
  )
}
