import { useState } from "react";

function MOOC() {
  const [isChecked, setIsChecked] = useState(true);

  function handleIsChecked() {
    setIsChecked(() => !isChecked);
  }

  return (
    <>
      <div className="flex justify-left pl-10 items-center mt-4 border-t-2 border-stone-300">
        <div className="flex mt-4 gap-4 items-center">
          <h3 className="text-2xl flex font-bold justify-center">
            MOOC Lectures
          </h3>
          <input
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            type="checkbox"
            checked={isChecked}
            onChange={handleIsChecked}
          />
        </div>
      </div>
      {isChecked && <GuestLectureForm />}
    </>
  );
}

function GuestLectureForm() {
  return (
    <div>
      <div className="flex justify-left pl-10 items-center mt-4 gap-9">
        <label className="text-sm font-bold">Upload Lecture Details</label>
        <input className="text-sm font-semibold" type="file" />
      </div>
      <div className="flex justify-left pl-10 items-center mt-4 gap-9">
        <button className="bg-green-400 text-sm uppercase font-semibold rounded-full px-2 py-1">
          Upload
        </button>
      </div>
    </div>
  );
}

export default MOOC;
