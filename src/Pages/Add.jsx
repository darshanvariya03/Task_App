import Container from "react-bootstrap/Container";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ADD_TASK } from "../Action/action";

const Add = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [task, setTask] = useState('')
    const [record, setRecord] = useState([])

    const handelsubmit = (e) => {
        e.preventDefault();

        if (!task) {
            alert('Please Fill Up Input')
            return false;
        }

        let obj = {
            id: Math.floor(Math.random() * 1000),
            task
        }
        alert('Task Added')
        dispatch(ADD_TASK(obj))
        navigate('/')

    };

    return (
        <Container>
            <h2 align="center">Add Task</h2>
            <div align="center" className="d-flex justify-content-center col-lg-12">
                <div className="col-lg-8">
                    <div className="col-lg-6 add-btn">
                        <Link to={"/"}>
                            <button className="p-2 px-3 my-2">View Task</button>
                        </Link>
                    </div>
                    <div className="col-lg-6"></div>
                </div>
            </div>
            <div className="col-lg-12">
                <div className="d-flex justify-content-center col-lg-12">
                    <div className="main-box p-3 col-lg-8">
                        <div className="task-box p-2 px-3 col-lg-12">
                            <form action="" onSubmit={handelsubmit}>
                                <div className="add-input">
                                    <input
                                        type="text"
                                        placeholder="Enter Your Task"
                                        className="w-100 my-2"
                                        onChange={(e) => setTask(e.target.value)}
                                        value={task}
                                    />
                                </div>
                                <div className="add-btn">
                                    <button className="p-2 px-3 my-2">Add Task</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Add;
