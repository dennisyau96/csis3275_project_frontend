function SignUp() {
  return (
    <>
      <h1>This is sign up page.</h1>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#signUpModal"
      >
        Sign up
      </button>

      <div
        className="modal fade"
        id="signUpModal"
        tabIndex="-1"
        aria-labelledby="signUpModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="signUpModalLabel">
                Sign Up
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body table">
              {/*username */}
              <div className="mb-2">
                <label htmlFor="registerUsername" className="mr-2 col-span-1">
                  Username
                </label>
                <input
                  name="registerUsername"
                  className="border-2"
                  type="text"
                ></input>
              </div>
              {/*password */}
              <div className="mb-2">
                <label htmlFor="registerPassword" className="mr-2 col-span-1">
                  Password
                </label>
                <input
                  name="registerPassword"
                  className="border-2"
                  type="text"
                ></input>
              </div>
              {/*confirm password */}
              <div className="mb-2">
                <label
                  htmlFor="registerConfirmPasword"
                  className="mr-2 col-span-1"
                >
                  Confirm Password
                </label>
                <input
                  name="registerConfirmPasword"
                  className="border-2"
                  type="text"
                ></input>
              </div>
              {/*email  */}
              <div className="mb-2">
                <label htmlFor="registerEmail" className="mr-2 col-span-1">
                  Email
                </label>
                <input
                  name="registerEmail"
                  className="border-2"
                  type="text"
                ></input>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button type="button" className="btn btn-primary">
                Register as Owner
              </button>
              <button type="button" className="btn bg-orange-200">
                Register as Renter
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default SignUp;
