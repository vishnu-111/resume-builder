import { useState } from "react";
import "./App.css";
import GeneratedResume from "./components/generated resume/GeneratedResume";
import HomePage from "./components/home page/HomePage";
import PersonalDetails from "./components/personal details/PersonalDetails";
<head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Poppins:wght@600&family=STIX+Two+Text:wght@600&display=swap"
    rel="stylesheet"
  />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"></link>
</head>;
function App() {
  const [goToPersonalDetails, setGoToPersonalDetails] = useState(false);

  return (
    <div>
      {!goToPersonalDetails && <HomePage personal={setGoToPersonalDetails} />}
      {goToPersonalDetails && <PersonalDetails />}
      <GeneratedResume/>
    </div>
  );
}

export default App;
