import { Route, Routes } from "react-router-dom";
import { Landing } from "./pages/Landing";
import { Setup } from "./pages/Setup";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/setup" element={<Setup />} />
    </Routes>
  );
}

export default App;
