export default function Template({ children }) {
  return (
    <div className="bg-gray-100 grid place-items-center justify-center rounded-md w-[12rem] h-[12rem] dark:bg-gray-800">
      <span className="text-sm font-semibold">{children}</span>
    </div>
  );
}
