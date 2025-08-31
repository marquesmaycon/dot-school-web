import { Outlet } from "react-router"
import Header from "./components/header/header"
import Footer from "./components/footer/footer"

function App() {
  return (
    <main>
      <div className="main-container">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </main>
  )
}

export default App
