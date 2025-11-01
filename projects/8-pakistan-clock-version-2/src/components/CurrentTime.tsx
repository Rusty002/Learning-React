import { useEffect, useState } from "react";

function CurrentTime() {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <p className="lead">
      {" "}
      This is the Current time : {currentDate.toLocaleDateString()} -{" "}
      {currentDate.toLocaleTimeString()}{" "}
    </p>
  );
}

export default CurrentTime;
