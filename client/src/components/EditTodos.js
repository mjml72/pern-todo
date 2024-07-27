import React, { useState } from 'react'

export default function EditTodos({ todo }) {

    const [description, setDescription] = useState(todo.description);

    const updateDescription = async (e) => {
        e.preventDefault();
        try {
            const body = { description };
            const response = await fetch(`http://localhost:4000/todos/${todo.todoid}`,
                {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(body)
                }
            )
            
            window.location = "/";
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <div>
            <button type="button" className="btn btn-warning"
                data-bs-toggle="modal"
                data-bs-target={`#id${todo.todoid}`}>
                Edit
            </button>

            <div className="modal fade" id={`id${todo.todoid}`}>
                <div className="modal-dialog">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h4 className="modal-title">Edit Todo</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" onClick={()=> setDescription(todo.description)}></button>
                        </div>

                        <div className="modal-body">
                            <input type='text' className='form-control'
                                value={description}
                                onChange={(e) => setDescription(e.target.value)} />
                        </div>

                        <div className="modal-footer">
                            <button type="button"
                             className="btn btn-warning"
                              onClick={(e) => updateDescription(e)}
                              >Edit</button>
                            <button type="button" 
                            className="btn btn-danger" 
                            data-bs-dismiss="modal" 
                            onClick={()=> setDescription(todo.description)}
                            >Close</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
