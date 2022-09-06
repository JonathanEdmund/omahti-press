function News() {
  function NewsCard() {
    return (
      <div className="outline row my-3 container-fluid p-3">
        <div className="col-8">
          <p className="text">author - date</p>
          <h5 className="title">
            Maecenas augue lacus, pretium quis tortor non, vulputate rhoncus
            ante?
          </h5>
          <p className="text">
            Pellentesque sodales tortor at tristique finibus. Proin eget eros
            nulla. Curabitur a condimentum augue. Proin viverra dolor quam
          </p>
        </div>
        <div className="col-4 p-3">
          <img
            className="img-fluid"
            src="https://dummyimage.com/250x200/878787/fff"
            alt="Card cap"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="container-fluid">
      <h2 className="title mb-3 ">What's New?</h2>
      <NewsCard />
      <NewsCard />
      <NewsCard />
    </div>
  );
}

export default News;
