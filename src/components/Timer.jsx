export default function Timer({ lapTime, spanCaption }) {
  const formatTime = (timeInMillis) => {
    const hours = Math.floor(timeInMillis / 3600000);
    const minutes = Math.floor((timeInMillis % 3600000) / 60000);
    const seconds = Math.floor((timeInMillis % 60000) / 1000);
    const formattedTime = `${hours}:${minutes < 10 ? "0" : ""}${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;

    return formattedTime;
  };

  return (
    <span>
      ⏱ {spanCaption} {formatTime(lapTime)}
    </span>
  );
}
