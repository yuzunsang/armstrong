export default function NewSet() {
  let cssClasses = "";

  function handleBtnClick() {
    cssClasses += "bg-green-600";
  }

  return (
    <li>
      <div>
        <ul>
          <li>
            <span>1</span>
            <span>BLANK</span>
            <input type="number" />
            <input type="number" />
            <button className={cssClasses} onClick={handleBtnClick}>
              V
            </button>
          </li>
        </ul>
      </div>
    </li>
  );
}
