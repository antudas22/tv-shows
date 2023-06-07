import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Routes'
import { Toaster } from 'react-hot-toast'

function App() {

  return (
      <div className="h-100 w-100">
        <RouterProvider router={router}/>
        <Toaster/>
      </div>
  )
}

export default App
