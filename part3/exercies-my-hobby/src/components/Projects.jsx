import data from '../data.json';
import { useState } from 'react';

function MyProjects() {
    const [index, setIndex] = useState(0);

    

    function handleClick() {
        if (index < data.projects.length-1) {
            setIndex(index + 1);
        } else {
            setIndex(0);
        }
    }

    let projects = data.projects;
    let project = projects[index];

    return(
        <div>
            <button onClick={handleClick}>Next</button>
            <h2>{project.name}</h2>
            <img src={project.photoURL} alt={project.name} height="600px"></img>
            <ul>
                <li><b>Fiber:</b> {project.fiberType.join(", ")}</li>
                <li><b>Color:</b> {project.color.join(", ")}</li>
            </ul>
        </div>
    );
}

export default MyProjects;