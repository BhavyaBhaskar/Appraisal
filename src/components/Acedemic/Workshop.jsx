function Workshop() {
  return (
    <div className>
      <h3 className="text-2xl flex font-bold justify-left pt-4 pl-10">
        Workshop
      </h3>
      <div className="flex justify-left gap-9 mt-4 pl-10">
        <span className="flex item-center gap-2 justify-between">
          <span className="text-sm font-semibold">1 Day</span>
          <input type="radio" name="workshop" value="D-1" />
        </span>
        <span className="flex item-center gap-2 justify-between">
          <span className="text-sm font-semibold">2 Day</span>
          <input type="radio" name="workshop" value="D-2" />
        </span>
        <span className="flex item-center gap-2 justify-between">
          <span className="text-sm font-semibold">5 Day</span>
          <input type="radio" name="workshop" value="D-5" />
        </span>
      </div>
    </div>
  );
}

export default Workshop;
