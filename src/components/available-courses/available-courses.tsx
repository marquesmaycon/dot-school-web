import { useState } from "react"

import { useAvailableCourses } from "@/features/courses/server"
import { useThemes } from "@/features/themes/server"

import "./available-courses.css"

const AvailableCourses = () => {
  const { data: themes } = useThemes()

  const [filter, setFilter] = useState<{ title: string; themes: number[] }>({ title: "", themes: [] })

  const [title, setTitle] = useState("")
  const [selectedThemes, setSelectedThemes] = useState<number[]>([])

  const { data: courses } = useAvailableCourses(filter)

  const handleThemeChange = (id: number) => {
    setSelectedThemes((prev) => (prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]))
  }

  const handleFilter = () => {
    setFilter({ title, themes: selectedThemes })
  }

  return (
    <div>
      <h2>Cursos Disponíveis</h2>
      <form
        className="coursesFilterBar"
        onSubmit={(e) => {
          e.preventDefault()
          handleFilter()
        }}
      >
        <div className="coursesFilterTitle">
          <label htmlFor="title">Título:</label>
          <input id="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="coursesFilterInput" placeholder="Buscar por título..." />
        </div>
        <fieldset style={{ border: "none", padding: 0 }}>
          <legend className="coursesFilterLegend">Temas:</legend>
          <div className="coursesFilterGroup">
            {themes?.map((theme) => (
              <label key={theme.id} className="coursesFilterCheckboxLabel">
                <input type="checkbox" checked={selectedThemes.includes(theme.id)} onChange={() => handleThemeChange(theme.id)} style={{ accentColor: "#90caf9" }} />
                {theme.title}
              </label>
            ))}
          </div>
        </fieldset>
        <button type="submit" className="coursesFilterBtn">
          Filtrar
        </button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Capa</th>
            <th>Nome</th>
            <th>Turmas</th>
          </tr>
        </thead>
        <tbody>
          {courses?.map((course) => (
            <tr key={course.id}>
              <td>
                <img src={course.imgUrl} alt={course.title} className="course-image" />
              </td>
              <td>{course.title}</td>
              <td>{course.classes?.map((classItem) => classItem.title).join(", ")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default AvailableCourses
