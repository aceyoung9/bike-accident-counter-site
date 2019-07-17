import React from "react";
import Layout from "../components/layout";

const _calcDate = () => {
  const lastAccident = new Date(2018, 3, 24, 13);
  const today = new Date();

  return Math.floor((today - lastAccident) / (1000 * 60 * 60 * 24));
};

const Footer = () => (
  <footer className="mw9 center">
    <div className="cf">
      <div className="fl w-100 w-third-ns pa3">
        <h2>
          Made with pettiness by <a href="//aliceyoung.xyz">aliceyoung.xyz</a>
        </h2>
        <p>
          (Do you want the{" "}
          <a href="https://github.com/aliceyoung9/bike-accident-counter-site">
            source code
          </a>{" "}
          or something?)
        </p>
      </div>
      <div className="fl w-100 w-third-ns pa3">
        <h2>Boston Bike Advocacy Organizations I like</h2>
        <ul>
          <li>
            <a href="http://bostoncyclistsunion.org/">Boston Cyclists Union</a>
          </li>
          <li>
            <a href="http://www.streetspacmass.org/">StreetsPAC Mass</a>
          </li>
        </ul>
      </div>
      <div className="fl w-100 w-third-ns pa3">
        <h2>Send Thoughts and Prayers™</h2>
        <ul>
          <li>
            Indulge my <a href="https://venmo.com/alice9">Venmo</a> lol
          </li>
          <li>
            Twitter: <a href="//twitter.com/alice_young9">@alice_young9</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

const IndexPage = () => (
  <Layout>
    <h1>
      It has been <span className="highlight">{_calcDate()} days</span> since my
      last bike accident 🙃
    </h1>
    <Footer />
  </Layout>
);

export default IndexPage;
