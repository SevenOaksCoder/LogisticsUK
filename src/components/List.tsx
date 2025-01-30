import { useState, useEffect } from "react";

type DriverProps = {
  driverID: string;
  surname: string;
  forename: string;
  vehicleRegistration: string;
  traces: [];
};

type TraceProps = DriverProps & {
  date: string;
  activity: [];
};

type ActivityProps = TraceProps & {
  startTime: string;
  type: string;
  duration: number;
};

export default function List() {
  const [drivers, setDrivers] = useState([]);
  let duration = 0;
  let day = -1;
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  useEffect(() => {
    const api = async () => {
      const data = await fetch("/drivers.json", {
        method: "GET",
      });
      const jsonData = await data.json();
      setDrivers(jsonData.data);
    };

    api();
  }, []);

  return (
    <>
      {drivers &&
        drivers.map((driver: DriverProps) => {
          return (
            <ul
              key={driver.driverID}
              className="list-group list-group-horizontal spacing-width"
              id={"_" + driver.driverID}
            >
              {driver.traces &&
                driver.traces.map((trace: TraceProps) => {
                  return (
                    trace.activity &&
                    trace.activity.map((active: ActivityProps) => {
                      duration += active.duration;

                      // get day worked
                      let date = new Date(trace.date);
                      day = date.getDay();
                      let dayName = days[day].toLowerCase();

                      let li = document.querySelector(
                        "#_" +
                          driver.driverID +
                          " li.list-group-item." +
                          dayName
                      );

                      li?.classList.add("days-worked");
                    })
                  );
                })}
              <li className="list-group-item name">
                {driver.forename} {driver.surname}
              </li>
              <li className="list-group-item reg">
                {driver.vehicleRegistration}
              </li>
              <li className="list-group-item">{duration}</li>
              <li className="list-group-item mon">Mon</li>
              <li className="list-group-item tue">Tue</li>
              <li className="list-group-item wed">Wed</li>
              <li className="list-group-item thu">Thu</li>
              <li className="list-group-item fri">Fri</li>
              <li className="list-group-item sat">Sat</li>
              <li className="list-group-item sun">Sun</li>
            </ul>
          );
        })}
    </>
  );
}
