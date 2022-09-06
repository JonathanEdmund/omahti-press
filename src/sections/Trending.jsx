function Trending() {
  function Card() {
    return (
      <div className="col">
        <div className="px-4 py-5 outline">
          <div className="mx-3 mt-3 mb-4">
            <div className="my-3 d-flex justify-content-between">
              <p class="card-title text">EVENT</p>
              <p class="card-title text">3RD AUGUST 2022</p>
            </div>
            <img
              className="mx-auto my-3 d-block img-fluid"
              src="https://dummyimage.com/400x400/878787/fff"
              alt="Card cap"
            />
            <h4 className="mt-5 title">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              augue lacus
            </h4>
          </div>
        </div>
      </div>
    );
  }

  function TrendingCards() {
    return (
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    );
  }

  return (
    <div className="m-5">
      <h2 className="title my-4">Trending on Press</h2>
      <TrendingCards />
    </div>
  );
}

export default Trending;
