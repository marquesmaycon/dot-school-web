import { useState } from "react"
import { Link, useLocation } from "react-router"

import "./header.css"

const menuOptions = [
  { label: "Cursos", href: "/" },
  { label: "Matrículas", href: "/matriculas" },
  { label: "Usuários", href: "/usuarios" }
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="header">
      <div className="headerContent">
        <div>
          <h1>Dot School</h1>
        </div>
        <nav>
          <ul>
            {menuOptions.map((option) => (
              <li key={option.label}>
                <Link to={option.href} className={location.pathname === option.href ? "active" : ""}>
                  {option.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <button className="menu-toggle" aria-label="Abrir menu" onClick={() => setMenuOpen((open) => !open)}>
          <span className="hamburger"></span>
        </button>
      </div>

      <div className={`mobileNav ${menuOpen ? "open" : ""}`}>
        <ul>
          {menuOptions.map((option) => (
            <li key={option.label}>
              <Link to={option.href} className={location.pathname === option.href ? "active" : ""}>
                {option.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
