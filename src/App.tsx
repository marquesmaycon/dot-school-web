import { Outlet } from "react-router"
import Header from "./components/header/header"

function App() {
  return (
    <main>
      <div className="main-container">
        <Header />
        <Outlet />
      </div>
    </main>
  )
}

export default App
