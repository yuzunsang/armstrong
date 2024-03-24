import NewSet from "./NewSet.jsx";

export default function Sets({ sets, onAdd, onDelete, onInputActivated }) {
  return (
    <section>
      {sets.length > 0 && (
        <ul className="p-2 mb-8 rounded-md bg-stone-100">
          {sets.map((set) => (
            <li
              key={set.id}
              className="flex items-center justify-between border-solid border-2 border-stone-300 p-2 rounded-md font-bold"
            >
              <span>{set.setCounter}</span>
              <span>{set.weight}</span>
              <span>{set.rep}</span>
              <button
                onClick={() => onDelete(set.id)}
                className="text-stone-700 hover:text-red-500"
              >
                ❌
              </button>
            </li>
          ))}
        </ul>
      )}

      <NewSet
        onAdd={onAdd}
        onInputActivated={onInputActivated}
        setCounter={sets.length + 1}
      />
    </section>
  );
}
