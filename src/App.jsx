import { useState } from "react";
import Acedemic from "./pages/Acedemic";
import Research from "./pages/Research";
import Administrative from "./pages/Administrative";

import SignUp from "./pages/SignUp";
import Login from "./pages/login";

function App() {
  const [activeTab, setActiveTab] = useState("login");
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
