import React, {useRef , useState, useMemo ,useCallback} from "react";
import ReactDOM from "react-dom/client"

function Stopwatch(){

    const [time,setTime]=useState(0);
    const [isRunning,setIsRunning]=useState(false);
    const intervalRef=useRef(null);

    function start(){
    if(!isRunning){
    intervalRef.current=setInterval(()=>{
            setTime((prevTime)=>prevTime+1);
        },1000)
    setIsRunning(true);
    }
}


    function stop(){
        if(isRunning){
        clearInterval(intervalRef.current);
        intervalRef.current=null;
        setIsRunning(false);
        }
    }

    function reset(){
        clearInterval(intervalRef.current);
        intervalRef.current=null;
        setTime(0);
    }


    return(
        <>
            <h1>Stopwatch is : {time}</h1>
            <button onClick={start}>Start</button>
            <br></br>
            <br></br>
            <button onClick={stop}>Stop</button>
            <br></br>
            <br></br>
            <button onClick={reset}>Reset</button>
        </>
    )
}


ReactDOM.createRoot(document.getElementById('root')).render(<Stopwatch></Stopwatch>);