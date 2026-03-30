
import './App.css'
import Navbar from './components/layout/Navbar'
import Sidebar from './components/layout/Sidebar'
import Homepage from './pages/Homepage'


function App() {


  return (
   <div className='flex' >
   <Sidebar/>
  
  <Homepage/>

   </div>
  )
}

export default App
