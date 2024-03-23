import Template from "./Template.jsx";

export default function Templates() {
  return (
    <div className="mt-24 text-center w-2/3 flex flex-col items-center">
      <h1 className="text-xl font-bold text-stone-500 my-4">
        최근 운동 템플릿
      </h1>
      <div className="grid grid-cols-2 gap-8 p-2">
        <Template>Item 1</Template>
        <Template>Item 2</Template>
        <Template>Item 3</Template>
        <Template>Item 4</Template>
      </div>
    </div>
  );
}
