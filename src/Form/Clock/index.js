import { useCurrentDate } from "./useCurrentDate";
const styleClock = {
  fontSize: "10px",
  color: "white",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "8px 0 18px",
  lineHeight: "1.4",
};

const Clock = () => {
  const clock = useCurrentDate();
  
  const clockDisplay = (
    <div style={styleClock}>
      <span>
        Today is {clock.toLocaleString("en-US", {
          weekday: "long", 
          month: "long", 
          day: "numeric",
        })}
      </span>
      <span>
        {clock.toLocaleTimeString()}
      </span>
      </div>
  );

  return (clockDisplay);
};

export default Clock;