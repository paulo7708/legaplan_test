'use client'

import {
  useState,
  ReactNode,
  createContext,
  Dispatch,
  SetStateAction,
} from 'react'
import style from './page.module.css'
import { Modal } from './components/Modal'
import { Task } from './components/task'

interface TaskItem {
  key: string
  content: string
}

interface TasksContextProps {
  tasks: TaskItem[]
  setTasks: Dispatch<SetStateAction<TaskItem[]>>
  checkedTasks: TaskItem[]
  setCheckedTasks: Dispatch<SetStateAction<TaskItem[]>>
  newTasks: string
  setNewTasks: Dispatch<SetStateAction<string>>
  count: number
  setCount: Dispatch<SetStateAction<number>>
}

export const TasksContext = createContext<TasksContextProps | undefined>(
  undefined,
)

export default function Home() {
  const [tasks, setTasks] = useState<TaskItem[]>([])
  const [checkedTasks, setCheckedTasks] = useState<TaskItem[]>([])
  const [newTasks, setNewTasks] = useState<string>('')
  const [count, setCount] = useState<number>(1)

  function onDeleteTasks(taskToDelete: string) {
    const tasksWithoutDeleteOne = tasks.filter(
      (task) => task.content !== taskToDelete,
    )
    setTasks(tasksWithoutDeleteOne)
  }

  function onCheckedTasks(taskToChecked: string) {
    const checkedTask = tasks.find((task) => task.content === taskToChecked)

    if (checkedTask) {
      setCheckedTasks((prevCheckedTasks) => [...prevCheckedTasks, checkedTask])
      onDeleteTasks(taskToChecked)
    }
  }

  function unCheckedTasks(taskToUnchecked: string) {
    const uncheckedTaskOne = checkedTasks.find(
      (task) => task.content === taskToUnchecked,
    )

    if (uncheckedTaskOne) {
      setTasks((prevTasks) => [...prevTasks, uncheckedTaskOne])
      onDeleteTasks(taskToUnchecked)
    }
  }

  return (
    <TasksContext.Provider
      value={{
        tasks,
        setTasks,
        checkedTasks,
        setCheckedTasks,
        newTasks,
        setNewTasks,
        count,
        setCount,
      }}
    >
      <section className={style.section}>
        <div className={style.container}>
          <h2 className={style.h2}>Suas tarefas de Hoje</h2>
          <div className={style.tasks}>
            <div className={style.task}></div>
            <div className={style.content}>
              <div className={style.tasks}>
                {tasks.map((task) => (
                  <Task
                    key={task.key}
                    unCheckedTasks={unCheckedTasks}
                    onCheckedTasks={onCheckedTasks}
                    content={task.content}
                    status={false}
                    onDeleteTasks={onDeleteTasks}
                    checked={false}
                  />
                ))}
              </div>
            </div>
          </div>

          <h2 className={style.h2}>Tarefas finalizadas</h2>
          <div className={style.tasks}>
            <div className={style.task}></div>
            <div className={style.content}>
              <div className={style.tasks}>
                {checkedTasks.map((checkedTask) => (
                  <Task
                    key={checkedTask.key}
                    onCheckedTasks={onCheckedTasks}
                    content={checkedTask.content}
                    status={false}
                    onDeleteTasks={onDeleteTasks}
                    checked={true}
                  />
                ))}
              </div>
            </div>
          </div>

          <Modal />
        </div>
      </section>
    </TasksContext.Provider>
  )
}
