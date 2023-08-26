import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./Components/Header.jsx";
import MainPage from "./Containers/MainPage.jsx";
import IndividualPage from "./Containers/IndividualPage";

const App = () => {
    const [sfw, setSfw] = useState(false);

    const router = createBrowserRouter([
        {
            element: <Header sfw={sfw} setSfw={setSfw} />,
            children: [
                {
                    path: "/anime/",
                    element: <MainPage sfw={sfw} />,
                },
                {
                    path: "/anime/:id",
                    element: <IndividualPage />,
                },
            ],
        },
    ]);

    return <RouterProvider router={router} />;
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
