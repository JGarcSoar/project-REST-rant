const React = require("react");
const Def = require("./default");

function error404() {
  return (
    <Def>
      <main>
        <h1>404: PAGE NOT FOUND</h1>
        <div>
          <img src="https://http.cat/404" alt="404 cat image"></img>
        </div>
        <p>Oops, sorry, we can't find this page!</p>
      </main>
    </Def>
  );
}

module.exports = error404;
