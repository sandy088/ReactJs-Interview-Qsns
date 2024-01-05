"use client";
import explorer from "../data/folderData";
import FolderStruct from "../components/core/folderStruct";
import React, { useEffect } from "react";
import { useState } from "react";
export default function page() {
  const [isOpen, setIsOpen] = useState(false);
  const [isFolder, setIsFolder] = useState(false);
  const [name, setName] = useState("");
  const [exp, setExp] = useState(explorer);

  const onClickHandler = () => {
    if (isFolder) {
      setExp({
        ...exp,
        items: [
          ...exp.items,
          { id: "44", name: name, isFolder: true, items: [] },
        ],
      });
      setIsFolder(false);
    }
  };

  return (
    <div>
      <div>
        <span onClick={() => setIsOpen((isOpen) => !isOpen)} className="">
          📂{exp?.name}
        </span>{" "}
        <span
          className=" ml-4 border border-gray-400 p-1"
          onClick={() => setIsFolder((isFolder) => !isFolder)}
        >
          New Folder
        </span>
        <div className={`${isOpen ? "block ml-5" : "hidden "}`}>
          <div className={`${isFolder ? "inline-block" : "hidden"}`}>
            <input
              type="text"
              placeholder="Enter Folder Name"
              className={` inline-block text-black`}
              onChange={(e) => setName(e.target.value)}
            ></input>
            <button className="ml-3" onClick={onClickHandler}>
              Save
            </button>
          </div>

          {exp?.items?.map((item, index) => {
            return (
              <div key={index} className=" py-[2px]">
                <FolderStruct explorer={item} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
