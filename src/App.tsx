import './App.css'
import NavBar from "./components/NavBar.tsx";
import Footer from "./components/Footer.tsx";

function App() {

  return (
      <>
          <NavBar />
          <div className="skeleton h-screen w-screen"></div>
          <Footer />
      </>
  )
}

export default App
