import React from "react";

const Error404Page = () => {
  return (
    <div className="bg-info">
      <header>
        <h1>404 Not Found</h1>
        <p>We could not find your URL</p>
      </header>
      <section className="page-section">
        <p>
          If there was suppossed to be something here, please contact the admins
          and we will attempt to use whatever computer sceincy magical formula
          we possible can to get this issue resolved.
        </p>
        <p>Try going back and see if that works too.  Sometimes it do be like that.</p>
      </section>
    </div>
  );
};

export default Error404Page;
