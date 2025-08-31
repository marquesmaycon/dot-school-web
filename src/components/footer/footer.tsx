import "./footer.css"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footerContent">
        <div className="footerSection">
          <h3>Dot School</h3>
          <p>Plataforma de gestão educacional moderna e intuitiva.</p>
        </div>

        <div className="footerSection">
          <h4>Links Rápidos</h4>
          <ul>
            <li>
              <a href="/">Cursos</a>
            </li>
            <li>
              <a href="/matriculas">Matrículas</a>
            </li>
            <li>
              <a href="/usuarios">Usuários</a>
            </li>
          </ul>
        </div>

        <div className="footerSection">
          <h4>Contato</h4>
          <ul>
            <li>Email: contato@dotschool.com</li>
            <li>Telefone: (11) 99999-9999</li>
          </ul>
        </div>
      </div>

      <div className="footerBottom">
        <p>&copy; {currentYear} Dot School. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}
