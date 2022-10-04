import React from "react";

let DUMMY_MODULES = [
  "dummy", "dummy", "dummy", "dummy", "dummy", "dummy", "dummy", "dummy",
]

const ModuleContainer = (props: { name: string }) => {
  return (
      <div className="bg-gray-600 m-2 rounded-2xl h-96 object-cover overflow-hidden">
        <h1 className="m-1.5 text-2xl">{props.name}</h1>
        <div>
          <label htmlFor="default-toggle" className="inline-flex relative items-center cursor-pointer">
            <input type="checkbox" value="" id="default-toggle" className="sr-only peer"/>
            <div
                className="w-11 h-6 bg-gray-200 rounded-full peer
                dark:bg-gray-700 peer-checked:after:translate-x-full
                 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white
                  after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5
                   after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
        </div>
      </div>
  );
}


const Modules = () => {
  return (
      <div className="grid grid-cols-recipe3 justify-center place-content-start h-[100%] min-h-screen">
        {
          DUMMY_MODULES.map((moduleData) => <ModuleContainer name={moduleData}/>)
        }
      </div>

  )
}
export default Modules;