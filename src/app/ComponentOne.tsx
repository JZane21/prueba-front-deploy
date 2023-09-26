"use client";
import React from "react";
import { useState } from "react";
import { getHelloFromApi } from "./service";

const ComponentOne = () => {
  const [textP, setTextP] = useState<string>("RAGNAROK");

  const presionar = async () => {
    const dataFromBackend = await getHelloFromApi();
    if (dataFromBackend !== null && textP === "RAGNAROK") {
      setTextP(dataFromBackend.message);
    } else {
      setTextP("RAGNAROK");
    }
  };

  return (
    <div
      className="fixed top-0 left-0 bottom-0 right-0 flex justify-center items-center
  bg-opacity-70 bg-slate-900 flex-col"
    >
      <p
        className="bg-blue-800 rounded-md shadow-md p-2 text-white text-lg font-medium
      mb-6"
      >
        {textP}
      </p>
      <button
        onClick={presionar}
        className="w-max rounded-md bg-slate-300 shadow-md text-xl font-medium p-2
        hover:bg-slate-200 active:bg-slate-400"
      >
        Presionar
      </button>
    </div>
  );
};

export default ComponentOne;
