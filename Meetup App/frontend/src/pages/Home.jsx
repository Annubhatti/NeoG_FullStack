import React, { useEffect, useState } from "react";
import logo from "../images/logo.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [type, setType] = useState("Both");
  const [events, setEvents] = useState([]);

  const [search, setSearch] = useState("");

  const [notFound, setNotFound] = useState(false);

  const navigate = useNavigate();

  const fetchEvents = async () => {
    try {
      const response =
        type === "Both"
          ? await fetch("http://localhost:3000/events")
          : await fetch(`http://localhost:3000/events/types/${type}`);

      if (!response.ok) {
        console.log("Failed to fetch");
      }

      const data = await response.json();
      setEvents(data);
    } catch (error) {
      console.log("Failed to get data", error);
    }
  };

  console.log(events);

  useEffect(() => {
    fetchEvents();
  }, [type]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      if (search) {
        const capital = search.charAt(0).toUpperCase();
        const text = `${capital}${search.slice(1)}`;
        const response = await fetch(
          `http://localhost:3000/events/search/${text}`
        );

        if (!response.ok) {
          console.log("Failed to get searched data");
        }
        const data = await response.json();
        if (data && data.length > 0) {
          setEvents(data);
          setNotFound(false);
        } else {
          setNotFound(true);
        }
      } else {
        setNotFound(false);
        fetchEvents();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container py-3 ">
        <img
          src={logo}
          alt="logo"
          style={{ height: "70px", margin: "0", padding: "0" }}
        />
        <div className="float-end pt-4">
          <form onSubmit={submitHandler}>
            <div className="input-group ">
              <input
                placeholder="⌕ Search by title and t..."
                className="form-control"
                type="text"
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </form>
        </div>
        <hr />
        <div className="float-end py-2">
          <select
            className="form-select"
            onChange={(e) => setType(e.target.value)}>
            <option value="">Select Event Type</option>
            <option value="Offline">Offline</option>
            <option value="Online">Online</option>
            <option value="Both">Both</option>
          </select>
        </div>
        <h1 className="fw-bold">Meetup Events</h1>

        {notFound && (
          <h2 className="text-center fw-fw-semibold">Event Not Found</h2>
        )}

        <div className="row ">
          {events.length > 0 &&
            events.map((event) => (
              <div
                key={event._id}
                style={{ cursor: "pointer" }}
                className="col-md-4 my-3"
                onClick={() => navigate(`/${event._id}`)}>
                <span className="position-absolute z-3 bg-light rounded p-1 m-2 fw-semibold">
                  {`${event.eventType} Event`}
                </span>
                <div className="card  border-0 bg-body-tertiary">
                  <img
                    className="card-img-top rounded img-fluid"
                    style={{ width: "90%" }}
                    alt={event.eventName}
                    src={event.eventImageURL}
                  />

                  <p className="fw-normal fs-6 p-0 m-0">{`${event.sessionTiming.fromDate} • ${event.sessionTiming.fromTime} IST`}</p>
                  <h4 className="fw-bold fs-4">{event.eventName}</h4>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Home;