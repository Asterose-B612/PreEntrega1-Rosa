import './App.css';
import Navbar from "./components/Navbar/Navbar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"

function App() {
 
const greeting="Bienvenidos a Gerhard"
  return (
    <>
    <Navbar/>
    <ItemListContainer greeting= {greeting} />

    </>
  )
}

export default App
