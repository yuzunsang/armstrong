export default function Button({ children, buttonStyle, widthFull, ...props }) {
  let classes = "px-4 py-2 text-xs md:text-base rounded-md";

  if (buttonStyle === "blue") {
    classes +=
      " bg-cyan-100 text-stone-900 hover:bg-cyan-200 hover:text-stone-700";
  } else if (buttonStyle === "red") {
    classes += " bg-red-100 text-stone-800 hover:text-red-500";
  } else if (buttonStyle === "green") {
    classes +=
      " bg-green-300 text-stone-900 hover:bg-green-400 hover:text-stone-700";
  }

  if (widthFull) {
    classes += " w-full";
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
