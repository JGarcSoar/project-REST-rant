const React = require("react");
const Def = require("../default");

function show(data) {
  let comments = <h3 className="inactive">No comments yet!</h3>;
  let rating = <h3 className="inactive">Not yet rated</h3>;
  if (data.place.comments.length) {
    let sumRatings = data.place.comments.reduce((tot, c) => {
      return tot + c.stars;
    }, 0);
    let averageRating = Math.round(sumRatings / data.place.comments.length);
    let stars = "";
    for (let i = 0; i < averageRating; i++) {
      stars += "⭐";
    }
    rating = <h3>{stars}</h3>;
    comments = data.place.comments.map((c) => {
      return (
        <div className="border">
          <h2 className="rant">{c.rant ? "Rant! 😡" : "Rave! 😻"}</h2>
          <h4>{c.content}</h4>
          <h3>
            <stong>- {c.author}</stong>
          </h3>
          <h4>Rating: {c.stars}</h4>
          <form
            method="POST"
            action={`/places/${data.place.id}/comment/${c.id}?_method=DELETE`}
          >
            <input
              type="submit"
              className="btn btn-danger"
              value="Delete Comment"
            />
          </form>
        </div>
      );
    });
  }
  return (
    <Def>
      <main>
        <h1>{data.place.name}</h1>
        <div className="col-sm-6">
          <p className="text-center">{data.place.cuisines}</p>
          <img src={data.place.pic} alt={data.place.name} />
          {/* <h3>
            Located in {data.place.city}, {data.place.state}
          </h3> */}
          <p className="text-center">
            Located in {data.place.city}, {data.place.state}
          </p>
          <h2>Description</h2>
          <h3>{data.place.showEstablished()}</h3>
          <h4>Serving {data.place.cuisines}</h4>
          <h2>Comments</h2>
          {comments}
          <h2>Rating</h2>
          {rating}
          <h2>Got your own RANT/RAVE?</h2>
          <form method="POST" action={`${data.place.id}/comment`}>
            <div className="form-group">
              <label htmlFor="content">Content</label>
              <input
                className="form-control"
                id="content"
                name="content"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="author">Author</label>
              <input
                className="form-control"
                id="author"
                name="author"
                required
              />
            </div>
            <div className="form-group col-sm-4">
              <label htmlFor="stars">Star Rating</label>
              <input
                type="number"
                id="stars"
                name="stars"
                step={0.5}
                value={5}
                min="0.5"
                max="5"
              />
            </div>
            <div className="form-group">
              <label htmlFor="rant">Rant?</label>
              <input type="checkbox" id="rant" name="rant" value={true} />
            </div>
            <input
              className="btn btn-primary"
              type="submit"
              value="Add Comment"
            />
          </form>
        </div>
        <a href={`/places/${data.place.id}/edit`} className="btn btn-warning">
          Edit
        </a>
        <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}>
          <button type="submit" className="btn btn-danger">
            Delete
          </button>
        </form>
      </main>
    </Def>
  );
}

module.exports = show;
