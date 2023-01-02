import "./styles/styles.app/App.css";
import GeneralProvider from "./contexts/GeneralContext";
import CentralPage from "./pages/CentralPage/centralPage";

function App() {
  return (
    <>
      <GeneralProvider>
        <CentralPage />
      </GeneralProvider>
    </>
  );
}

export default App;
