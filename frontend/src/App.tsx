import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { ThankYou } from "./pages/ThankYou";
import "styles.css";
import { ConfigProvider } from "antd";

function App() {
  
  return (
    <>
      <ConfigProvider
        form={{
          validateMessages: {
            required: "Required field!",
          },
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={undefined} />
            <Route path="/thank-you" element={<ThankYou />} />
          </Routes>
        </BrowserRouter>
      </ConfigProvider>
    </>
  );
};

export default App;
