/* eslint-disable no-unused-vars */
import { useState } from "react";

function SmartBoardUse() {
  const [isChecked, setIsChecked] = useState(false);

  function handleChecked(e) {
    setIsChecked(() => e.target.value === "yes");
  }
  return (
    <div className="flex mt-4 pt-2 justify-left pl-10 border-t-2 border-stone-300">
      <div className="justify-center mb-4">
        <h3 className="text-2xl flex font-bold justify-center">
          Smart Board Use
        </h3>
        <div className="flex justify-center gap-9 mt-4">
          <div className="flex item-center gap-2 justify-between">
            <span className="text-sm font-semibold">Yes</span>
            <input
              className="w-4"
              type="radio"
              name="SmartBoardUse"
              value="yes"
              onClick={handleChecked}
            />
          </div>
          <div className="flex item-center gap-2 justify-between">
            <span className="text-sm font-semibold">No</span>
            <input
              className="w-4"
              type="radio"
              name="SmartBoardUse"
              value="no"
              onClick={handleChecked}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SmartBoardUse;
