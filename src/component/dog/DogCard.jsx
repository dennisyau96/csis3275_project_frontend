function DogCard() {
  return (
    <>
      <div className="card" style="width: 18rem;">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Dog Name</h5>
          <p className="card-text">Dog&apos; description</p>
          <a href="#" className="btn btn-primary">
            Details
          </a>
          <a href="#" className="btn btn-primary">
            Apply
          </a>
        </div>
      </div>
    </>
  );
}
export default DogCard;
