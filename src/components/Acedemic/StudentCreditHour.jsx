function StudentCreditHour() {
  // CHANGE value to P1 to P5 to manually change feedback checkbox
  let checked;
  const creditHour = Number("100");

  if (creditHour > 280) checked = "P5";
  if (creditHour > 200 && creditHour <= 280) checked = "P4";
  if (creditHour > 90 && creditHour <= 200) checked = "P3";
  if (creditHour > 15 && creditHour <= 90) checked = "P2";
  if (creditHour <= 15) checked = "P0";

  return (
    <>
      <h3 className="text-2xl flex font-bold justify-left pl-10 mt-4 p-2 border-t-2 border-stone-300">
        Student Credit Hours
      </h3>
      <div className="flex item-center justify-left pl-10 gap-10 mt-2">
        <div className="flex item-center justify-center gap-2">
          <label className="text-sm font-semibold">0</label>
          <input
            className="w-4"
            type="radio"
            name="studentFeedBack"
            value="P1"
            disabled
            checked={checked === "P0"}
          />
        </div>
        <div className="flex item-center justify-center gap-2">
          <label className="text-sm font-semibold">1</label>
          <input
            className="w-4"
            type="radio"
            name="studentFeedBack"
            value="P2"
            disabled
            checked={checked === "P1"}
          />
        </div>
        <div className="flex item-center justify-center gap-2">
          <label className="text-sm font-semibold">2</label>
          <input
            className="w-4"
            type="radio"
            name="studentFeedBack"
            value="P3"
            disabled
            checked={checked === "P2"}
          />
        </div>
        <div className="flex item-center justify-center gap-2">
          <label className="text-sm font-semibold">3</label>
          <input
            className="w-4"
            type="radio"
            name="studentFeedBack"
            value="P3"
            disabled
            checked={checked === "P3"}
          />
        </div>
        <div className="flex item-center justify-center gap-2">
          <label className="text-sm font-semibold">4</label>
          <input
            className="w-4"
            type="radio"
            name="studentFeedBack"
            value="P3"
            disabled
            checked={checked === "P4"}
          />
        </div>
        <div className="flex item-center justify-center gap-2">
          <label className="text-sm font-semibold">5</label>
          <input
            className="w-4"
            type="radio"
            name="studentFeedBack"
            value="P3"
            disabled
            checked={checked === "P5"}
          />
        </div>
      </div>
    </>
  );
}

export default StudentCreditHour;
