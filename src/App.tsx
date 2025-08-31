import { Outlet } from "react-router"

function App() {
  return (
    <main>
      <div className="main-container">
        <h1>DOT Digital School</h1>
        <Outlet />
      </div>
    </main>
  )
}

export default App
