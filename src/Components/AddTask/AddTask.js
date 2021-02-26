import { React, useState } from "react";
import "./AddTask.css";
import { useDispatch } from "react-redux";
import { addTask } from "../../Redux/Action/Action";
import "bootstrap/dist/css/bootstrap.css";

const AddTask = () => {
  const [name, setName] = useState("");
  function handleChangeName(e) {
    setName(e.target.value);
  }

  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <section className="get-in-touch">
          <h1 className="title">Get in touch</h1>
          <form className="contact-form row">
            <div className="form-field col-lg-12">
              <input
                id="message"
                className="input-text js-input"
                type="text"
                value={name}
                onChange={handleChangeName}
              />
              <label className="label" htmlFor="message">
                Task
              </label>
            </div>
            <div className="form-field col-lg-12">
              <button
                type="button"
                className="btn btn-outline-primary "
                onClick={(e) => {
                  let a = name;
                  if (a !== "") {
                    e.preventDefault();
                    dispatch(
                      addTask([{ id: Math.random(), name: name, done: false }])
                    );
                    setName("");
                  } else {
                    alert("no");
                  }
                }}
              >
                Add
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default AddTask;
