import { Route, Routes } from "react-router-dom";
import { AuthCallback } from "./pages/AuthCallback";
import { Landing } from "./pages/Landing";
import { Setup } from "./pages/Setup";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/setup" element={<Setup />} />
      <Route path="/auth/callback" element={<AuthCallback />} />
    </Routes>
  );
}

export default App;
