import { lazy } from "react"
import { Route, Routes } from "react-router"

const App = lazy(() => import("@/app"))
const Courses = lazy(() => import("@/components/courses/courses"))
const Users = lazy(() => import("@/components/users/users"))
const Registrations = lazy(() => import("@/components/registrations/registrations"))

export default function AppRouter() {
  return (
    <Routes>
      <Route element={<App />}>
        <Route path="/" element={<Courses />} />
        <Route path="/usuarios" element={<Users />} />
        <Route path="/matriculas" element={<Registrations />} />
      </Route>
    </Routes>
  )
}
