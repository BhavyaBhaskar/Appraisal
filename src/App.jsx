import { useState } from "react";
import Acedemic from "./pages/Acedemic";
import Research from "./pages/Research";
import Administrative from "./pages/Administrative";
import Login from "./pages/login";
import SignUp from "./pages/SignUp";

function App() {
  const [activeTab, setActiveTab] = useState("signup");
  console.log(activeTab);

  return (
    <div className="flex justify-center">
      {activeTab === "Acedemic" && (
        <Acedemic setActiveTab={setActiveTab} activeTab={activeTab} />
      )}
      {activeTab === "Research" && (
        <Research setActiveTab={setActiveTab} activeTab={activeTab} />
      )}
      {activeTab === "Administrative" && (
        <Administrative setActiveTab={setActiveTab} activeTab={activeTab} />
      )}
      {activeTab === "login" && <Login setActiveTab={setActiveTab} />}
      {activeTab === "signup" && <SignUp setActiveTab={setActiveTab} />}
    </div>
  );
}

export default App;
