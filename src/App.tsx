import './App.css'
import NavBar from "./components/NavBar.tsx";
import Footer from "./components/Footer.tsx";

function App() {
    const env = import.meta.env.SHTLK_CHECK
    const url = import.meta.env.BASE_URL
    const api = import.meta.env.SHTLK_BASE_API

  return (
      <>
          <NavBar />
          <div className="skeleton h-full w-full">
              <h1>{env}</h1>
              <h1>{url}</h1>
              <h1>{api}</h1>
          </div>
          <Footer />
      </>
  )
}

export default App
