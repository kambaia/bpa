import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import ContactPage from "./ContactPage";
import RecrutamentPage from "./RecrutamentPage";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/recrutament" element={<RecrutamentPage />} />
            </Routes>
        </BrowserRouter>
    );
}