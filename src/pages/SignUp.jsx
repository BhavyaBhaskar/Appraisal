function SignUp() {
  return (
    <div>
      <div className="flex items-center w-screen justify-center bg-stone-300 p-4 sticky top-0">
        VITAP
      </div>
      <div className="flex justify-center px-10 py-6 bg-stone-100">
        <div className="border-2 p-6 w-4/12 bg-white">
          <div>School</div>
          <input type="text" className="bg-stone-50 border-2 w-full" />
          <div>Employee ID</div>
          <input type="text" className="bg-stone-50 border-2 w-full" />
          <div>Designation</div>
          <input type="text" className="bg-stone-50 border-2 w-full" />
          <div>Employee Type</div>
          <input type="text" className="bg-stone-50 border-2 w-full" />
          <div>Date of Joining</div>
          <input type="text" className="bg-stone-50 border-2 w-full" />
          <div>Date of Birth</div>
          <input type="text" className="bg-stone-50 border-2 w-full" />
          <div>Email (VITAP mail)</div>
          <input type="text" className="bg-stone-50 border-2 w-full" />
          <div>Office Number</div>
          <input type="text" className="bg-stone-50 border-2 w-full" />
          <div>Personal Number</div>
          <input type="text" className="bg-stone-50 border-2 w-full" />
          <div>
            <button className="bg-green-500 my-2 px-2 py-0.5 text-white">
              Submit
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center  justify-center bg-stone-300 p-4 sticky bottom-0">
        &copy; Copyright 2024, All Rights Reserved
      </div>
    </div>
  );
}

export default SignUp;
