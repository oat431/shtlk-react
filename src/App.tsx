import './App.css'
import NavBar from "./components/NavBar.tsx";
import Footer from "./components/Footer.tsx";

function App() {
    const env = import.meta.env.VITE_CHECK
    const url = import.meta.env.BASE_URL
    const api = import.meta.env.VITE_BASE_API

  return (
      <>
          <NavBar />
          {/*<div className="skeleton h-full w-full"></div>*/}
          <h1>{env}</h1>
          <h1>{url}</h1>
          <h1>{api}</h1>
          <Footer />
      </>
  )
}

export default App
