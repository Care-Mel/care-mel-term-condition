import { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { FaRegAddressCard } from "react-icons/fa6";

function AgreeForm({ currentStep }) {
  console.log(currentStep);
  const [name, setName] = useState("");
  const [NRC, setNrc] = useState("");

  return (
    <div className="h-[57.2vh] mt-10 flex flex-col justify-end gap-5">
      <div className="flex bg-white items-center border-2 border-gray-300 rounded-md shadow-md">
        <span className="p-2 bg-white">
          <FaRegUserCircle size={20} className="text-gray-500" />
        </span>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            localStorage.setItem("name", e.target.value);
          }}
          className="p-2 border-none focus:outline-none flex-grow"
        />
      </div>
      <div className="flex bg-white items-center border-2 border-gray-300 rounded-md shadow-md">
        <span className="p-2 bg-white">
          <FaRegAddressCard size={20} className="text-gray-500" />
        </span>
        <input
          type="text"
          placeholder="NRC Number"
          value={NRC}
          onChange={(e) => {
            setNrc(e.target.value);
            localStorage.setItem("NRC", e.target.value);
          }}
          className="p-2 border-none focus:outline-none flex-grow"
        />
      </div>
    </div>
  );
}

export default AgreeForm;
