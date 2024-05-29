
import './App.css'
import Header from './component/Header/Header'
import Shop from './component/Shop/Shop'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <Header></Header>
      <Shop></Shop>
      <ToastContainer />
    </>
  )
}

export default App
