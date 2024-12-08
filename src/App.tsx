import { useState } from "react";
import SignUpForm from "./Components/SignUpForm";
import LoginForm from "./Components/LoginForm";
import "./styles/forms.css";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const toggle = () => {
    setIsLogin(!isLogin);
  };
  return (
    <div className="App">
      {isLogin ? <LoginForm toggle={toggle} /> : <SignUpForm toggle={toggle} />}
    </div>
  );
}

export default App;
