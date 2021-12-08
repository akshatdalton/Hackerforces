import React, { useEffect, useState } from "react";
import api from "../../api";
import Problem from "../Problem";

import "./student.css";

const Student = () => {
    const [problems, setProblems] = useState([
        {
            id: 1,
            title: "1st problem",
            accepted: true,
        },
        {
            id: 2,
            title: "2nd problem",
            accepted: false,
        },
        {
            id: 3,
            title: "3rd problem",
            accepted: true,
        },
    ]);

    useEffect(() => {
        getProblems();
    }, []);

    const getProblems = async () => {
        try {
            const res = await api.get("/api/problems");
            if (res.status === 200) {
                setProblems([...res.data]);
            } else {
                console.error(`Error: ${res.status}`);
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="problems-list">
            {problems.map((problem) => (
                <Problem
                    key={problem.id}
                    id={problem.id}
                    title={problem.title}
                    accepted={problem.accepted}
                />
            ))}
        </div>
    );
};

export default Student;
