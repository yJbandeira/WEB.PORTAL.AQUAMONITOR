import "./App.css";
import AppRouter from "./routes";
import { StoreProvider } from "./store/store";

function App() {
  return (
    <div className="App">
      <StoreProvider>
        <AppRouter />
      </StoreProvider>
    </div>
  );
}

export default App;
