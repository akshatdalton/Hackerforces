import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Label, Input, Form, FormGroup, Spinner } from "reactstrap";

import api from "../../api";

import "./editpanel.css";

const EditPanel = () => {
    const { id } = useParams();
    const [problem, setProblem] = useState({
        name: "",
        body: "",
        code: "",
        testcases: [],
    });
    const [name, setName] = useState("");
    const [body, setBody] = useState("");
    const [testcases, setTestcases] = useState([{ input: "", output: "" }]);
    const [isProblemUpdated, setIsProblemUpdate] = useState(true);
    const [problemUpdateStatus, setProblemUpdateStatus] = useState("");

    useEffect(() => {
        getProblem(id);
        getTestCases(id);
    }, 9999);

    const getTestCases = async (id) => {
        try {
            const res = await api.get("/api/problem/" + id + "/testcases");
            if (res.status === 200) {
                const { input, output } = res.data;
                const test_cases = [];
                for (let idx = 0; idx < input.length; ++idx) {
                    test_cases.push({ input: input[idx], output: output[idx] });
                }
                setTestcases([...test_cases]);
            } else {
                console.error(`Error: ${res.status}`);
                // setError(res);
            }
            // setIsProblemLoading(false);
        } catch (err) {
            console.error(err);
            // setError(err);
        }
    };

    const getProblem = async (id) => {
        try {
            const res = await api.get("/api/problem/" + id);
            if (res.status === 200) {
                const { name, body, code, testcases } = res.data;
                setProblem({ name, body, code, testcases });
                setName(name);
                setBody(body);
            } else {
                console.error(`Error: ${res.status}`);
                // setError(res);
            }
            // setIsProblemLoading(false);
        } catch (err) {
            console.error(err);
            // setError(err);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsProblemUpdate(false);
        try {
            const res = await api.put("/api/problem", {
                id,
                name,
                body,
            });
            if (res.status === 200) {
                setProblemUpdateStatus("Saved");
            } else {
                console.error(`Error: ${res.status}`);
                setProblemUpdateStatus("Error Occured");
            }
        } catch (err) {
            console.error(`Error: ${err}`);
            setProblemUpdateStatus("Error Occured");
        }
        setIsProblemUpdate(true);
    };

    return (
        <>
            <div className="edit-problem">
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label for="name">Name</Label>{" "}
                        <Input
                            name="name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        ></Input>
                        <Label className="edit-body-label" for="body">
                            Body
                        </Label>{" "}
                        <Input
                            name="body"
                            bsSize="lg"
                            value={body}
                            type="textarea"
                            onChange={(e) => setBody(e.target.value)}
                        ></Input>
                        <Button
                            className="save-btn"
                            color="success"
                            type="submit"
                        >
                            Save Changes
                        </Button>
                        <span className="problem-status">
                            {problemUpdateStatus}
                        </span>
                    </FormGroup>
                </Form>
            </div>
            {!isProblemUpdated ? (
                <div className="update-status">
                    <Spinner color="success" size="">
                        Loading...
                    </Spinner>
                </div>
            ) : (
                <></>
            )}
        </>
    );
};

export default EditPanel;
