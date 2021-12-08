import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Student from "./components/Student";
import Problem from "./components/Problem";

const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/student" element={<Student />} />
                <Route
                    path="/problems/:id"
                    element={<Problem />}
                />
            </Routes>
        </BrowserRouter>
    );
};

export default Routers;
