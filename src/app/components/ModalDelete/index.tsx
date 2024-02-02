import { useContext } from 'react'
import s from './style.module.css'
import { TasksContext } from '@/app/page'

export const ModalDelete = () => {
  const { count, setCount, tasks, setNewTasks, setTasks, onDeleteTasks }: any =
    useContext(TasksContext)

  const handleDelete = (event: React.FormEvent) => {
    event.preventDefault()

    const deleteTask = {
      key: count,
      content: tasks,
      status: false,
    }

    onDeleteTasks(deleteTask)
  }

  return (
    <div>
      <form onSubmit={handleDelete}>
        <input className={s.modalState} id="modal-1" type="checkbox" />
        <div className={s.modal}>
          <label className={s.modal__bg} htmlFor="modal-1"></label>
          <div className={s.modal__inner}>
            <label className={s.modal__close} htmlFor="modal-1"></label>
            <h2>Deletar Tarefa</h2>

            <div className={s.btnContainer}>
              <label htmlFor="modal-1" className={s.btnCancel}>
                <p className={s.auto}>Cancelar</p>
              </label>
              <button className={s.btnAdd} type="submit">
                <p>Remover</p>
              </button>
            </div>
          </div>
        </div>
      </form>
      <label className={s.btn} htmlFor="modal-1">
        Cancelar
      </label>
    </div>
  )
}
