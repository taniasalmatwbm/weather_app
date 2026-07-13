import "./DateTime.css";

const DateTime = () => {

    const now = new Date();

    const day = now.toLocaleDateString("en-US",{
        weekday:"long"
    });

    const time = now.toLocaleTimeString([],{
        hour:"2-digit",
        minute:"2-digit"
    });

    return(

        <div className="dateTime">

            <h3>{day}</h3>

            <p>{time}</p>

        </div>

    )

}

export default DateTime;