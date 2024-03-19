import Button from "./Button.jsx";

export default function SideBar() {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h1 className="text-stone-50 my-4">암스트롱 ARMSTRONG</h1>
      <menu className="flex items-center gap-4">
        <li>
          <Button>워크아웃 시작</Button>
        </li>
        <li>
          <Button>이력</Button>
        </li>
      </menu>
    </aside>
  );
}
