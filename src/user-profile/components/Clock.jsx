import { useEffect, useRef, useState } from "react";
import '../css/clock.css'
import { useNavigate } from "react-router-dom";


function Clock() {
  const navigate = useNavigate();
  const [timezones, setTimezones] = useState([]);
  const [selectedTimeZone, setSelectedTimeZone] = useState("");
  const [time, setTime] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const timeIntervalRef = useRef(null);

  function onChangeDropdown(e) {
    setSelectedTimeZone(e.target.value);
  }

  useEffect(() => {
    fetch("http://worldtimeapi.org/api/timezone")
      .then((response) => response.json())
      .then((json) => {
        setTimezones(json);
        setSelectedTimeZone(json[0]);
      })
      .catch((error) => console.error(error));

    return () => {
      clearInterval(timeIntervalRef.current);
      timeIntervalRef.current = null;
    };
  }, []);

  function startInterval() {
    clearInterval(timeIntervalRef.current);
    timeIntervalRef.current = null;
    timeIntervalRef.current = setInterval(() => {
      setTime((time) => {
        return new Date(time.setSeconds(time.getSeconds() + 1));
      });
    }, 1000);
    setIsTimerRunning(true);
  }

  useEffect(() => {
    fetch("http://worldtimeapi.org/api/timezone/" + selectedTimeZone)
      .then((response) => response.json())
      .then((json) => {
        const dateTime = new Date(json.datetime);
        setTime(dateTime);
        startInterval();
      })
      .catch((error) => console.error(error));
  }, [selectedTimeZone]);

  if (!timezones.length) {
    return <div>No countries timezones</div>;
  }

  function getTime() {
    const options = { timeZone: selectedTimeZone, hour12: false };
    const hours = time.toLocaleString("en-US", { ...options, hour: 'numeric' });
    const minutes = time.toLocaleString("en-US", { ...options, minute: 'numeric' });
    const seconds = time.toLocaleString("en-US", { ...options, second: 'numeric' });

    return (
      <div className="time" style={{ backgroundColor: 'gray', color: '#ffcc00', padding: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', height: '25px', borderRadius: '5px' }}>
        <div style={{ fontSize: '2em', fontWeight: 'bold', marginRight: '10px' }}>
          <span>{hours}:</span> 
        </div>
        <div style={{ fontSize: '2em', fontWeight: 'bold', marginRight: '10px' }}>
          <span>{minutes}:</span>
        </div>
        <div style={{ fontSize: '2em', fontWeight: 'bold' }}>
          <span>{seconds}</span>
        </div>
      </div>
    );
  }

  function onPauseStart() {
    if (isTimerRunning) {
      clearInterval(timeIntervalRef.current);
      timeIntervalRef.current = null;
    } else {
      startInterval();
    }
    setIsTimerRunning(!isTimerRunning);
  }

  return (
    <div className="clock">
    <button onClick={() => navigate("/")} className="btn">Back</button>
      <label>
        <select className="dropdown" value={selectedTimeZone} onChange={onChangeDropdown}>
          {timezones.map((timezone) => {
            return (
              <option key={timezone} value={timezone}>
                {timezone}
              </option>
            );
          })}
        </select>
      </label>
      {getTime()}
      <br></br>
      <br></br>
      {time && <button className="btn" onClick={onPauseStart}>{isTimerRunning ? 'Pause' : 'Start'}</button>}
    </div>
  );
}

export default Clock;
