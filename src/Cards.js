import './Cards.css';

function Cards(games) {
    let columns = [];
    games = games.games;
    let containerStyle = {
        height: (games.length + games.length%3) * 30 + 'vh'
    }

    for (var n=0; n<games.length; n=n+3){ 
        let row = [];
        for (var i=n; i<n+3; i++){
            row.push( 
            <div className="card">
                <div className="card-image" style={{backgroundImage: `url('${process.env.PUBLIC_URL}/images/${ games[i].name }.png')`,backgroundRepeat: "no-repeat", backgroundSize: "calc(0.8*0.25*100vw) 30vh"}}>
                    <div className="card-title">{ games[i].title }</div></div>
                <div className="card-desc">
                    <div>{ games[i].desc }</div>
                    <div><a href={`/games/${ games[i].name }`}><button className="btn">GO</button></a></div>
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