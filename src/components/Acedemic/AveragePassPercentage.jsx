function AveragePassPercentage() {
  // CHANGE value to P1 to P5 to manually change feedback checkbox
  let checked;
  const avgPercentage = Number("30");

  if (avgPercentage > 80) checked = "P6";
  if (avgPercentage > 70 && avgPercentage <= 80) checked = "P6";
  if (avgPercentage > 60 && avgPercentage <= 70) checked = "P4";
  if (avgPercentage > 50 && avgPercentage <= 60) checked = "P2";
  if (avgPercentage <= 50) checked = "P0";

  return (
    <>
      <h3 className="text-2xl flex font-bold justify-left pl-10 mt-4 p-2 border-t-2 border-stone-300">
        Student Average Pass Percentage
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
          <label className="text-sm font-semibold">2</label>
          <input
            className="w-4"
            type="radio"
            name="studentFeedBack"
            value="P2"
            disabled
            checked={checked === "P2"}
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
      </div>
    </>
  );
}

export default AveragePassPercentage;
