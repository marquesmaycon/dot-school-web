import { useState } from "react"

import { useAvailableCourses } from "@/features/courses/server"
import { useThemes } from "@/features/themes/server"

import "./courses.css"
import { DialogRegistration } from "./dialog-registration"

const AvailableCourses = () => {
  const [filter, setFilter] = useState<{ title: string; themes: number[] }>({ title: "", themes: [] })
  const [title, setTitle] = useState("")
  const [selectedThemes, setSelectedThemes] = useState<number[]>([])

  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [selectedClassId, setSelectedClassId] = useState<number | null>(null)

  const { data: themes } = useThemes()
  const { data: courses } = useAvailableCourses(filter)

  const handleThemeChange = (id: number) => {
    setSelectedThemes((prev) => (prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]))
  }

  const handleFilter = () => {
    setFilter({ title, themes: selectedThemes })
  }

  return (
    <div>
      <h2>Cursos</h2>
      <form
        className="coursesFilterBar surface"
        onSubmit={(e) => {
          e.preventDefault()
          handleFilter()
        }}
      >
        <div className="coursesFilterTitle">
          <label htmlFor="title" className="">
            Título:
          </label>
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

      <div>
        {courses?.map((course) => (
          <div className="courseContainer">
            <div className="courseHeader">
              <img src={course.imgUrl} alt={course.title} className="courseImage" />
              <div>
                <h3>{course.title}</h3>
                <p>{course.description}</p>
              </div>
              <div>
                <h4>Temas</h4>
                <p>{course.themes?.map((theme) => theme.title).join(", ")}</p>
              </div>
            </div>
            <h4>Turmas</h4>
            <table>
              <thead>
                <tr>
                  <th>Nome da Turma</th>
                  <th>Descrição</th>
                  <th>Vagas</th>
                  <th>Início</th>
                  <th>Fim</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {course.classes?.map(({ id, title, description, vacancies, startDate, endDate, meta }) => (
                  <tr key={id}>
                    <td>
                      <span>Nome da Turma: </span>
                      {title}
                    </td>
                    <td>
                      <span>Descrição: </span>
                      {description}
                    </td>
                    <td>
                      <span>Vagas: </span>
                      <span className="courseVacancies">
                        {meta?.users_count} / {vacancies}
                      </span>
                    </td>
                    <td>
                      <span>Início: </span>
                      {new Date(startDate).toLocaleDateString()}
                    </td>
                    <td>
                      <span>Fim: </span>
                      {new Date(endDate).toLocaleDateString()}
                    </td>
                    <td>
                      <span>Ações: </span>
                      <button
                        className="buttonSecondary"
                        onClick={() => {
                          setSelectedClassId(id)
                          setIsDialogOpen(true)
                        }}
                      >
                        Matricular
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>

      <DialogRegistration
        open={isDialogOpen}
        classId={selectedClassId}
        onClose={() => {
          setIsDialogOpen(false)
          setSelectedClassId(null)
        }}
      />
    </div>
  )
}

export default AvailableCourses
