import Cards from '../Cards';

function Games(props) {
    return (
        <Cards arr={props.data} category="games" />
    );
}

export default Games;