import { useState } from "react";

const TodoList = ()=> {
    const[tareas, setTareas] = useState([]);
    const[tarea, setTarea] = useState("");

const agregarTarea = (evento)=>{
  setTarea(evento.target.value);
      if(evento.keyCode == 13){
        setTareas([...tareas, tarea  ]);
        setTarea("");
      }

};


const eliminarTarea = (index) =>{
    const nuevasTareas = tareas.filter((_,i)=> i !== index);
    setTareas(nuevasTareas);
};



/* if (tareas.length== 0){
    return(
        <div className="container my-5">
            <div className="row">
                <div className="colum -md-4">
                     <div class="alert alert-danger" role="alert">
                       No tenes tareas pendientes!
                     </div>
                </div>
            </div>
        </div>



    )
 }*/




    return(
        <>
            <div className="container my-5">
                <div className="row">
                    <div className="colum -md-4">
                        <h2>TodoList</h2>
                        <input type="text" className="form-control mb-3" onChange={(evento) => { agregarTarea(evento) }} value={tarea} onKeyDown={(evento) => { agregarTarea(evento) }} />
                        {tareas.length == 0 ? <div className="alert alert-danger" role="alert">No tenes tareas pendientes!
                        </div> : <ul className="list-group">
                            {
                                tareas.map((item,index) => (
                                    <li key={index} className="list-group-item" >{item} 
                                    <button 
                                    type="button" 
                                    class="btn-close" 
                                    aria-label="Close"
                                    onClick={()=> eliminarTarea(index)}>
                                    </button></li>

                                ))
                            }
                        </ul>}

                    </div>
                </div>
            </div>



        </>



    )
}




export default TodoList;