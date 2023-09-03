import Random from "./components/Random";
import Tags from "./components/Tags";
export default function App() {
  return (
    <div className="w-full h-screen flex flex-col background relative overflow-x-hidden items-center">
      <h1 className=" w-11/12 text-center mt-[40px] bg-white rounded-lg ]  px-10 py-2 text-4xl font-bold ">RANDOM GIF</h1>
      <div className="flex felx-col w-full justify-center  gap-y-10 mt-[30px]">
        <Random />
        <Tags />
      </div>
    </div>
  );
}