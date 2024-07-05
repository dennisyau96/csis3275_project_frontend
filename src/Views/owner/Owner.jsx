function Owner() {
  return (
    <>
      <h1>This is Owner page.</h1>
      <div className="flex flex-col m-3">
        <label>User Name</label>
        <input type="text"></input>
        <label>Introduction</label>
        <input type="textarea"></input>
        <label>Phone Number</label>
        <input type="tel"></input>
        <label>Email </label>
        <input type="email"></input>
      </div>
    </>
  );
}
export default Owner;
