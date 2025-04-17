import './App.css'
import MortgageForm from "./components/MortgageForm.jsx";
import MortgageResult from "./components/MortgageResult.jsx";

function App() {
  return (
      <div className="min-h-screen flex items-center justify-center px-4 bg-blue-300">
          <div className="container mx-auto flex flex-col md:flex-row">
              <div className="w-full md:w-1/2">
                  <MortgageForm />
              </div>
              <div className="w-full md:w-1/2">
                  <MortgageResult />
              </div>
          </div>
      </div>
  )
}

export default App
