// hooks/useTasks.js
import { useState, useCallback } from "react"

const load = (key, fallback) => {
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback }
  catch { return fallback }
}

export function useTasks() {
  const [tasks, setTasks] = useState(() => load("tasks", []))

  const save = (next) => {
    setTasks(next)
    localStorage.setItem("tasks", JSON.stringify(next))
  }

  const addTask = useCallback((text) => {
    if (!text.trim()) return
    save([...tasks, createTask(text)])
  }, [tasks])

  const updateStatus = useCallback((id, status) => {
    save(tasks.map(t => t.id === id ? { ...t, status } : t))
  }, [tasks])

  const updateText = useCallback((id, text) => {
    save(tasks.map(t => t.id === id ? { ...t, text } : t))
  }, [tasks])

  const deleteTask = useCallback((id) => {
    save(tasks.filter(t => t.id !== id))
  }, [tasks])

  return { tasks, addTask, updateStatus, updateText, deleteTask }
}

// All mutation logic lives here — components just call these.
// createTask is from the data model tab.