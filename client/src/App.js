import './App.css';
import Authorization from "./components/Authorization/Authorization";
import LoginStore from "./components/Authorization/LoginStore";
import RegistrationStore from "./components/Authorization/RegistrationStore";
import {Route, Routes} from "react-router";
import {BrowserRouter} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "./utils/Constants";

function App() {
    const isAuth = true;
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path={LOGIN_ROUTE}
                    element={<Authorization authStore={LoginStore}/>}
                />
                <Route
                    path={REGISTRATION_ROUTE}
                    element={<Authorization authStore={RegistrationStore}/>}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
