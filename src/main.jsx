import ReactDOM from "react-dom/client";
import "./assets/index.css";
import Home from "./pages/home";
import { Provider } from "react-redux";
import store from "./stores";

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <Home />
    </Provider>
);
