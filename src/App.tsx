import { Outlet } from "react-router"

function App() {
  return (
    <main>
      <div className="main-container">
        <Outlet />
      </div>
    </main>
  )
}

export default App
