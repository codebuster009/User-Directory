import { useEffect, useRef, useState } from "react";

function Clock() {
  const [timezones, setTimezones] = useState([]);
  const [selectedTimeZone, setSelectedTimeZone] = useState("");
  const [time, setTime] = useState(0);
  const timeIntervalRef = useRef(null);

  function onChangeDropdown(e) {
    console.log(e.target.value);
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
      console.log("here");
      setTime((time) => {
        return new Date(time.setSeconds(time.getSeconds() + 1));
      });
    }, 1000);
  }

  useEffect(() => {
    fetch("http://worldtimeapi.org/api/timezone/" + selectedTimeZone)
      .then((response) => response.json())
      .then((json) => {
        console.log(json.datetime, " before Date");
        const dateTime = new Date(json.datetime);
        setTime(dateTime);

        startInterval();
      })
      .catch((error) => console.error(error));
  }, [selectedTimeZone]);

  if (!timezones.length) {
    <div>No countries timezones</div>;
  }

  function getTime() {
    const timeString = time.toLocaleString("en-US", {
      timeZone: selectedTimeZone,
    });

    return timeString.split(" ")[1];
  }

  function onPauseStart() {
    if (timeIntervalRef.current) {
      clearInterval(timeIntervalRef.current);
      timeIntervalRef.current = null;
    } else {
      console.log(" restart interval");
      startInterval();
    }
  }

  return (
    <div>
      {getTime()}
      <label>
        Country
        <select value={selectedTimeZone} onChange={onChangeDropdown}>
          {timezones.map((timezone) => {
            return (
              <option key={timezone} value={timezone}>
                {timezone}
              </option>
            );
          })}
        </select>
      </label>
      <br></br>
      <br></br>

      {time && <button onClick={onPauseStart}>Pause/Start</button>}
    </div>
  );
}

export default Clock;