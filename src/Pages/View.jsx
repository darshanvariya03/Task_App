import React from 'react'
import Container from "react-bootstrap/Container";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { DELETE_USER } from '../Action/action';


const View = () => {

    const dispatch = useDispatch();
    const record = useSelector(state => state.task.users)


    return (
        <Container>
            <div className="col-lg-12">
                <h2 align="center">TASK APP</h2>

                <div className="d-flex justify-content-center col-lg-12">
                    <div className="col-lg-8 d-flex my-2 justify-content-between">
                        <div className="col-lg-6 add-btn d-flex justify-content-start">
                            <Link to={"/add"}>
                                <button className="p-2 px-3">Add Task</button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="d-flex justify-content-center col-lg-12">
                    <div className="main-box px-3 col-lg-8">
                        {
                            record.map((val) => {
                                return (
                                    <div key={val.id} className="task-box my-3  d-flex p-2 px-3 col-lg-12">
                                        <div className="col-lg-10">
                                            <h5>{val.task}</h5>
                                        </div>
                                        <div className="col-lg-2 action-btn edit-btn d-flex justify-content-end">
                                            <button onClick={() => dispatch(DELETE_USER(val.id))} className="mx-2">
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                )
                            })

                        }
                    </div>
                </div>
            </div>
        </Container >
    )
}

export default View