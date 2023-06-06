import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Routes'

function App() {

  return (
      <div className="h-100 w-100">
        <RouterProvider router={router}/>
      </div>
  )
}

export default App
