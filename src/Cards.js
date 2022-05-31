import './Cards.css';
import {Link} from 'react-router-dom';

function Cards(props) {
    let data = props.arr;
    let cat = props.category;

    let columns = [];
    let containerStyle = {
        height: (data.length + data.length%3) * 30 + 'vh'
    }

    for (var n=0; n<data.length; n=n+3){ 
        let row = [];
        for (var i=n; i<n+3; i++){
            row.push( 
            <div className="card" key={i}>
                <div className="card-image" style={{backgroundImage: `url('${process.env.PUBLIC_URL}/images/${ data[i].name }.png')`,backgroundRepeat: "no-repeat", backgroundSize: "calc(0.8*0.25*100vw) 30vh"}}>
                    <div className="card-title">{ data[i].title }</div></div>
                <div className="card-desc">
                    <div>{ data[i].desc }</div>
                    <div><Link to={`/${cat}/${ data[i].name }`} ><button className="btn">GO</button></Link></div>
                </div>
            </div>)
        }
        columns.push(
            <div className="row" key={n}>{row}</div>);
    }

    return (
        <div className="container" style={containerStyle}>
            <div className="cards">{ columns }</div>
        </div> 
    );
}

export default Cards;