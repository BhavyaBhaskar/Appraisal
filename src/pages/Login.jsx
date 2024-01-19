/* eslint-disable react/prop-types */
function Login({ setActiveTab }) {
  return (
    <>
      <div>
        <div className="flex items-center w-screen justify-center bg-stone-300 p-4 sticky top-0">
          VITAP
        </div>
        <div className="flex justify-center">
          <div className="py-52">
            <div className="border-2 px-16 py-6">
              <div className="border-b-2">Login</div>
              <div>
                <div>User Id</div>
                <input type="text" className="bg-stone-100" />
              </div>
              <div>
                <div>User Id</div>
                <input type="text" className="bg-stone-100" />
              </div>
              <div className="border-b-2">
                <button className="bg-green-500 my-2 px-2 py-0.5 text-white">
                  Submit
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
