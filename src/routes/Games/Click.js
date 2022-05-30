import './Click.css';
import $ from 'jquery';

var scoreDisplay;
var score;
var state;
var time;
var Frames;

function Click() {
    click_init();

    var hours = [];
    for (var i=1; i<=12; i++) {
        hours.push(<div className="hour" id={`hour${i}`} key={i}></div>);
    }

    return (
        <div className="container" id="play">
      
            <div className="holder">
                <div className="leather">
                    <div className="watch">
                        {hours}
                        <div id="dial1"></div>
                        <div id="dial2"></div>
                        <div id="dial"></div>
                        <div className="circle"></div>
                        <div className="score-display">0</div>
                    </div>            
                </div>
                <div className="cpc"><div className="rate"></div></div>
                <div className="playagain" onClick={go}><div className="" style={{color:'black'}}>Play Again<br/><i className="material-icons">replay</i></div></div>
            </div>

            <div><button className="btn-clicky" onClick={incScore}>Click Me</button></div>
        
        </div>
    );
}

function click_init() {
    $(document).ready(function() {
        for(var i=0; i<=12; i++) {
            $("#hour"+i).css("transform", " rotate("+30*i+"deg) translate(10.5vw)");
        }

        score = 0;
        scoreDisplay = $('.score-display');
        state = "START";
        time = 10;
        Frames = -1;
        setTime();

        setInterval(draw, 1000/30);
    });
}

function go() {
    state = "START";
    scoreDisplay.html("0");
    time=10;
    setTime();

    $('.cpc').css("display", "none");
    $('.playagain').css("display", "none");
}

function setTime() {
    var angle = (6*time)-90;
    $("#dial").css("transform", " rotate("+angle+"deg) translate(5.5vw)");
}

function incScore() {
    if (state==="START" || state==="RUN") {
        state="RUN";
        score++;
        scoreDisplay.html(score);
    }
}

function draw() {
    if (state==="RUN") {
        Frames++;
        $('.cpc').css("display", "none");
        $('.playagain').css("display", "none");
    }
    if (Frames%60===0) {
        if(state==="RUN") {
            var angle = (6*time)-90;
            $("#dial").css("transform", " rotate("+angle+"deg) translate(5.5vw)");
            if (time===0) state="STOP";
            time--;
        }
    }

    if (state==="START") {
        score = 0;
        Frames = -1;
        time = 10;
    }

    if (state!=="RUN") {
        $(".rate").html("Clicks per second<br><span style='color: green;font-size: 2vw;'>" + (score / 10).toFixed(2) +"</span>");
    }
    if (state==="STOP") {
        $('.cpc').css("display", "flex");
        $('.playagain').css("display", "flex");
    }
}

export default Click;