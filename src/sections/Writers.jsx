function Writer() {
  return (
    <div className="row">
      <div className="col-2">
        <img
          src="https://dummyimage.com/50x50/878787/fff"
          alt="writer profile"
        />
      </div>
      <div className="col-10">
        <h5 className="title">Name</h5>
        <p>writer status</p>
      </div>
    </div>
  );
}

function Writers() {
  return (
    <>
      <h2 className="title">Writer of The Month</h2>
      <div className="mx-3">
        <Writer />
        <Writer />
        <Writer />
        <a href="*">See more {">"}</a>
      </div>
    </>
  );
}

export default Writers;
