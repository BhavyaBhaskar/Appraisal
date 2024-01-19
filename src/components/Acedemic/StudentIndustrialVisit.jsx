import { useState } from "react";

function StudentIndustrialVisit() {
  const [isChecked, setIsChecked] = useState(true);

  function handleIsChecked() {
    setIsChecked(() => !isChecked);
  }

  return (
    <>
      <div className="flex justify-left pl-10 items-center mt-4 border-t-2 border-stone-300">
        <div className="flex mt-4 gap-4 items-center">
          <h3 className="text-2xl flex font-bold justify-center">
            Student Industrial Visit
          </h3>
          <input
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            type="checkbox"
            checked={isChecked}
            onChange={handleIsChecked}
          />
        </div>
      </div>
      {isChecked && <CheckBox />}
    </>
  );
}

function CheckBox() {
  return (
    <div className="flex justify-left pl-10 gap-9 mt-4">
      <span className="flex item-center gap-2 justify-between">
        <span className="text-sm font-semibold">1 Visit</span>
        <input className="w-4" type="radio" name="workshop" value="V-1" />
      </span>
      <span className="flex item-center gap-2 justify-between">
        <span className="text-sm font-semibold">2 Visit</span>
        <input className="w-4" type="radio" name="workshop" value="V-2" />
      </span>
    </div>
  );
}

export default StudentIndustrialVisit;
