"use client";

import { Plus } from "lucide-react";
import { useState } from "react";

interface IProps {
  id: string;
  name: string;
  isFolder: boolean;
  items?: IProps[];
}
export default function FolderStruct({ explorer }: { explorer: IProps }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isFolder, setIsFolder] = useState(false);
  const [name, setName] = useState("");
  const [exp, setExp] = useState(explorer);

  const onClickHandler = () => {
    if (isFolder) {
      setExp({
        ...exp,
        items: [
          ...exp.items!,
          { id: "44", name: name, isFolder: true, items: [] },
        ],
      });
      setIsFolder(false);
    }
  };

  console.log(isOpen);
  if (exp?.isFolder) {
    return (
      <div>
        <div className=" p-2">
          <span onClick={() => setIsOpen((isOpen) => !isOpen)}>
            📂{exp?.name}
          </span>
          <span
            className=" ml-4 border border-gray-400 px-1 py-[0.01rem] cursor-pointer rounded-lg"
            onClick={() => {
                setIsFolder(!isFolder)
                setIsOpen(true)
            }}
          >
           <Plus className=" inline-block"/> New Folder
          </span>
          
          <div className={`${isOpen ? "block ml-5" : "hidden"} relative`}>
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
            {exp.items?.map((item, index) => {
              console.log("I am in this :- ", isOpen);
              return (
                <div key={index}>
                  <FolderStruct explorer={item} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className=" p-2">
          <span>📄{exp.name}</span>
        </div>
      </div>
    );
  }
}
