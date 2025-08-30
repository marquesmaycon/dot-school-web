import { useThemes } from "./features/themes/server"

function App() {
  const { data: themes } = useThemes()
  return (
    <main>
      <div className="main-container">{JSON.stringify(themes, null, 2)}</div>
    </main>
  )
}

export default App
