import { lazy } from "react"
import { Route, Routes } from "react-router"

const App = lazy(() => import("@/app"))
const AvailableCourses = lazy(() => import("@/components/available-courses/available-courses"))
const NewUser = lazy(() => import("@/components/new-user/new-user"))
const Registrations = lazy(() => import("@/components/registrations/registrations"))

export default function AppRouter() {
  return (
    <Routes>
      <Route element={<App />}>
        <Route path="/" element={<AvailableCourses />} />
        <Route path="/novo-usuario" element={<NewUser />} />
        <Route path="/matriculas" element={<Registrations />} />
      </Route>
    </Routes>
  )
}
