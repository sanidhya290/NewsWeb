import Image from "next/image";
import GetAll from "./Components/GetAll";
import NavBar from "./Components/NavBar";
import TopNews from "./Components/TopNews";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar className="bg-gray-800 text-white p-4" />
      <div className="flex flex-col md:flex-row gap-4 p-4">
        <TopNews className="flex-2 min-w-[300px]" />
        <GetAll className="flex-1 min-w-[300px]" />
      </div>
    </div>
  );
}
