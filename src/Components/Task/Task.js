import { React, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTask, doneTask, editTask } from "../../Redux/Action/Action";
import { Modal, Button } from "react-bootstrap";
import "./Task.css";
import "bootstrap/dist/css/bootstrap.css";
import Edit from "../Edit";
const Task = (props) => {
  // const [name, setName] = useState("");

  const dispatch = useDispatch();

  // function handleChangeName(e) {
  //   setName(e.target.value);
  // }
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-12">
            <div className="d-flex justify-content-between align-items-center activity">
              <div />
            </div>
            <div className="mt-3">
              <ul className="list list-inline">
                <div className="bor">
                  <li className="d-flex justify-content-between">
                    <div className="d-flex flex-row align-items-center">
                      <div className="d-flex flex-column mr-2">
                        <button
                          className="btn btn-danger btn-sm rounded-0"
                          type="button"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Done "
                          onClick={() => dispatch(doneTask(props.task.id))}
                        >
                          <i
                            className="fa fa-pencil-square"
                            aria-hidden="true"
                          ></i>
                        </button>
                      </div>
                      <div className="ml-2">
                        <h6 className="mb-0"> {props.task.name}</h6>
                        <div className="d-flex flex-row mt-1 text-black-50 date-time" />
                      </div>
                    </div>
                    <Edit />
                    <div className="d-flex flex-row align-items-center">
                      <div className="d-flex flex-column mr-2">
                        <button
                          className="btn btn-danger btn-sm rounded-0"
                          type="button"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Delete"
                          onClick={(e) => {
                            e.preventDefault();
                            dispatch(deleteTask(props.task.id));
                          }}
                        >
                          <i className="fa fa-trash" />
                        </button>
                      </div>
                    </div>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
