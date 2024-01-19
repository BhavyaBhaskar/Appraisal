/* eslint-disable react/prop-types */
function Login({ setActiveTab }) {
  return (
    <>
      <div>
        <div className="flex items-center w-screen justify-center bg-stone-300 p-4 sticky top-0">
          VITAP
        </div>
        <div className="flex justify-center">
          <div className="py-40">
            <div className="border-2 min-w-96 min-h-72">
              <div className="border-b-2 p-2 flex justify-center">Login</div>
              <div className="px-4 py-3">
                <div>User Id</div>
                <input type="text" className="bg-stone-100 w-full" />
              </div>
              <div className="px-4 py-3">
                <div>User Id</div>
                <input type="text" className="bg-stone-100 w-full" />
              </div>
              <div className="border-b-2 px-4 flex justify-between">
                <button
                  className="bg-green-500 my-2 px-2 py-0.5 text-white"
                  onClick={() => setActiveTab("Acedemic")}
                >
                  Submit
                </button>
                <button
                  className="my-2 px-2 py-0.5 border-4"
                  onClick={() => setActiveTab("signup")}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center  justify-center bg-stone-300 p-4 sticky bottom-0">
          &copy; Copyright 2024, All Rights Reserved
        </div>
      </div>
    </>
  );
}

export default Login;
