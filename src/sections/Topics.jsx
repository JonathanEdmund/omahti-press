function TopicsList() {
  return (
    <div className="row row-cols-3 d-inline-flex">
      <div className="col">
        <p className="outline px-2">Politics</p>
      </div>
      <div className="col">
        <p className="outline px-2">Science</p>
      </div>
      <div className="col">
        <p className="outline px-2">Achievement</p>
      </div>
      <div className="col">
        <p className="outline px-2">Event</p>
      </div>
    </div>
  );
}

function Topics() {
  return (
    <div className="mb-5">
      <h2 className="title">Discover Topics</h2>
      <TopicsList />
      <a className="d-block" href="*">
        See more {">"}
      </a>
    </div>
  );
}

export default Topics;
