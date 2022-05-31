import Cards from '../Cards';

function Projects(props) {
    return (
        <Cards arr={props.data} category="projects" />
    );
}

export default Projects;