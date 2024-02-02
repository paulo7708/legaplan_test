import style from './style.module.css'
import { Trash } from '@phosphor-icons/react'

interface bodyTask {
  key?: string
  content: string
  status: boolean
  onDeleteTasks: (taskToDelete: string) => void
  onCheckedTasks: (taskToChecked: string) => void
  unCheckedTasks: (taskToUnchecked: string) => void
  checked: boolean
}

export const Task = ({
  content,
  onDeleteTasks,
  onCheckedTasks,
  unCheckedTasks,
  checked,
}: bodyTask) => {
  const handleDeleteTasks = () => onDeleteTasks(content)
  const handleCheckedTasks = () => onCheckedTasks(content)
  const handleUncheckedTasks = () => unCheckedTasks(content)

  const handleClick = () => {
    if (checked === true) {
      handleUncheckedTasks()
    } else {
      handleCheckedTasks()
    }
  }

  return (
    <div className={style.handleTask}>
      <div className={checked ? style.taskStyleCliked : style.taskStyle}>
        <div className={style.check}>
          <input onClick={handleClick} type="checkbox" />

          <p className={style.text}>{content}</p>
        </div>
        <a className={style.trash} onClick={handleDeleteTasks}>
          <Trash className={style.trash} size={20} />
        </a>
      </div>
    </div>
  )
}
