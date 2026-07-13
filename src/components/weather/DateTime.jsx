 import './DateTime.css'
 
 const DateTime = () => {
  const date = new Date();

  const day = date.toLocaleDateString("en-US", {
    weekday: "long",
  });

  const time = date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="dateTime">
      <h3>{day}</h3>
      <p>{time}</p>
    </div>
  );
};

export default DateTime;