import useLocalStorage from "../hooks/useLocalStorage"


function CustomHookExample2() {
  const [task, setTask] = useLocalStorage('task', '')
  const [tasks, setTasks] = useLocalStorage('tasks', [])

  const onSubmit = (e) => {
    e.preventDefault()

    const taskObj = {
      task,
      completed: false,
      date: new Date().toLocaleDateString()
    }

    setTasks([...tasks, taskObj])
  }

  return (
    <>
    <form onSubmit={onSubmit} className='w-50'>
      <div className="mb-3">
        <label className="form-label">Task</label>
        <input className='form-control' type="text"
         value={task} onChange={(e) => setTask(e.target.value)} />
      </div>
      <button type="submit" className='btn btn-primary'>Submit</button>
    </form>
    {tasks.map((task) => (
      <h2 key={task.date}>{task.task}</h2>
    ))}
    </>

  )
}

export default CustomHookExample2