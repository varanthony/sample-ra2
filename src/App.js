import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';
import './css/App.css';
import './css/payment.css';

function App() {
  return (
    <div>
      <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
      <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
      <meta
        content="width=device-width, initial-scale=1, user-scalable=no"
        name="viewport"
      />
      <meta content name="description" />
      <meta content name="author" />
      <link href={require('./images/favicon.ico')} rel="icon" />
      <title>Payment Demo</title>
      <div className="ui-loader fade">
        <div className="loader" />
      </div>
      <a
        style={{ margin: "0 30px 30px 0" }}
        className="access"
        data-ajax="false"
        href="#announcement"
      >
        main content
  </a>
      <nav className="navbar navbar-default navbar-fixed-top hidden-md navbar-fixed-top-cart">
        <div className="container">
          <span className="navbar-brand navbar-brand-logo text-hide">
            Payment Demo
      </span>
          <div className="navbar-header pull-right">
            <div className="xs-cart dropdown-large">
              <a className="cartBtn" href="cart.html" role="button">
                <span className="glyphicon glyphicon-shopping-cart" />
                <span className="badge badge-default badge-pill ">
                  <span className="cart-count ">0</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
      <header className="navbar navbar-static-top bs-docs-nav header" id="top" role="banner">
        <div className="container">
          <div id="branding">
            <div id="govhklogo">
              <div title="Government e-Cheque Collection Logo" className="header-logo" />
            </div>
          </div>
          <nav className="collapse navbar-collapse navbar-right">
            <div className="cartBtnPanel">
              <a className="cartBtn" href="cart.html" role="button">
                <span className="glyphicon glyphicon-shopping-cart" />
                <span className="badge badge-default badge-pill ">
                  <span className="cart-count ">0</span>
                </span>
              </a>
            </div>
          </nav>
        </div>
      </header>
      <div className="home-pattern" />
      <div className="banner-container" id tabIndex={-1}>
        <div className="container homeNavBgOject">
          <h1>Payment Demo</h1>
        </div>
      </div>
      <div className="container">
        <div className="content row">
          <div className="col-sm-3 col-md-3 left-panel hidden-xs">
            <div className>
              <ul className="list-group">
                <li className="list-group-item list-group-item-action flex-column align-items-start active">
                  <span>
                    <strong>Step 1</strong>
                    <br />
                    Buy ticket
              </span>
                </li>
                <li className="list-group-item list-group-item-action flex-column align-items-start">
                  <span>
                    <strong>Step 2</strong>
                    <br />
                    Checkout
              </span>
                </li>
                <li className="list-group-item list-group-item-action flex-column align-items-start">
                  <span>
                    <strong>Step 3</strong>
                    <br />
                    Receive Acknowledgement
              </span>
                </li>
              </ul>
            </div>
            <p />
            <div className="left-nav">
              <ul className="nav nav-pills nav-stacked">
                <li>
                  <a
                    href="https://payecheque.marsdctr.gov.hk/content/en/usage_notes.htm"
                    title="Points to Note"
                    rel="external noopener noreferrer"
                    target="_blank"
                  >
                    <span
                      aria-hidden="true"
                      className="glyphicon glyphicon-circle-arrow-right"
                    />
                    Points to Note
              </a>
                </li>
                <li>
                  <a href="https://payecheque.marsdctr.gov.hk/content/en/faq.htm"
                    title="FAQs" rel="external noopener noreferrer" target="_blank">
                    <span aria-hidden="true" className="glyphicon glyphicon-circle-arrow-right"/>
                    FAQs
              </a>
                </li>
                <li>
                  <a href="https://payecheque.marsdctr.gov.hk/content/en/termsofuse.htm" title="Terms of Use"
                    rel="external noopener noreferrer" target="_blank">
                    <span aria-hidden="true" className="glyphicon glyphicon-circle-arrow-right"/>
                    Terms of Use
              </a>
                </li>
                <li className>
                  <a
                    href="http://www.gov.hk/en/about/helpdesk/index.htm"
                    title="Help Desk"
                    rel="external noopener noreferrer"
                    target="_blank"
                  >
                    <span
                      aria-hidden="true"
                      className="glyphicon glyphicon-circle-arrow-right"
                    />
                    Help Desk
              </a>
                </li>
                <li className>
                  <a
                    href="https://payecheque.marsdctr.gov.hk/content/en/demo.htm"
                    title="Service Demo"
                    rel="external noopener noreferrer"
                    target="_blank"
                  >
                    <span
                      aria-hidden="true"
                      className="glyphicon glyphicon-circle-arrow-right"
                    />
                    Service Demo
              </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-9 col-md-9">
            <div className role="main" id="main">
              <div class="row" id="eventsPanel">
                <div class="col-sm-6">
                  <div class="col-item thumbnail">
                    <div class="photo">
                      <img src={require('./images/Event_1.jpg')} class="img-responsive" alt="" />
                    </div>
                    <div class="info">
                      <div class="row">
                        <div class="price col-md-12">
                          <h5><strong> Giselle by The National Ballet of China</strong></h5><br />
                          <h5 class="price-text-color">$180</h5>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-12 event-summary text-muted"><small>
                          Giselle is a classical ballet from the 19th century romantic era. Count Albrecht, who
                          disguises himself as a peasant, has fallen in love with the peasant girl Giselle. However,
                          Albert has been engaged with Bathilde. The shock is too great for Giselle and she dies with
                          a broken heart. The grievous Albert visits Giselles grave. He then becomes the target of
                            attack by the spirits.</small>
                        </div>
                      </div>
                      <div class="separator clear-left">
                        <p class="btn-add">
                          <a class="btn btn-default  btn-block" href="#" role="button"
                            onclick="buyTicket(1);return false;">
                            <span class="glyphicon glyphicon-shopping-cart"></span> Buy ticket</a>

                        </p>
                      </div>
                      <div class="clearfix">
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="col-item thumbnail">
                    <div class="photo">
                      <img src={require('./images/Event_2.jpg')} class="img-responsive" alt="" />
                    </div>
                    <div class="info">
                      <div class="row">
                        <div class="price col-md-12">
                          <h5>
                            <strong> The Barber of Seville</strong></h5><br />
                          <h5 class="price-text-color">
                            $280</h5>
                        </div>

                      </div>
                      <div class="row">
                        <div class="col-md-12 event-summary text-muted"><small>
                          A love-struck aristocrat disguised as a penniless student. A beautiful young girl being
                          pursued by an older man for her money. A cunning fixer who helps make love blossom �X in
                            exchange for a fee, of course.</small>
                        </div>
                      </div>
                      <div class="separator clear-left">
                        <p class="btn-add">
                          <a class="btn btn-default  btn-block" href="#" role="button"
                            onclick="buyTicket(2);return false;">
                            <span class="glyphicon glyphicon-shopping-cart"></span> Buy ticket</a>

                        </p>
                      </div>
                      <div class="clearfix">
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6">
        <div class="col-item thumbnail">
            <div class="photo">
                <img src={require('./images/Event_3.jpg')} class="img-responsive" alt=""/>
            </div>
            <div class="info">
                <div class="row">
                    <div class="price col-md-12">
                        <h5>
                            <strong> The Spooky Bunch - Revisiting the New Wave</strong></h5><br/>
                        <h5 class="price-text-color">
                            $480</h5>
                    </div>

                </div>
                <div class="row">
                    <div class="col-md-12 event-summary text-muted"><small>
                            From the aging rises the New. In The Spooky Bunch, the traditions of Cantonese opera, which
                            had fallen out of vogue in the 1970s and 1980s, provide an evocative dramatic context for
                            the youthful New Wave. After flirting with the supernatural in The Secret, director Ann Hui
                            and writer Joyce Chan dive straight into the spectral dimension with this uproarious horror
                            comedy, setting the story in a Cantonese opera milieu.</small>
                    </div>
                </div>
                <div class="separator clear-left">
                    <p class="btn-add">
                        <a class="btn btn-default  btn-block" href="#" role="button"
                            onclick="buyTicket(3);return false;">
                            <span class="glyphicon glyphicon-shopping-cart"></span> Buy ticket</a>
                    </p>
                </div>
                <div class="clearfix">
                </div>
            </div>
        </div>
    </div>
    <div class="col-sm-6">
        <div class="col-item thumbnail">
            <div class="photo">
                <img src={require('./images/Event_4.jpg')} class="img-responsive" alt=""/>
            </div>
            <div class="info">
                <div class="row">
                    <div class="price col-md-12">
                        <h5><strong> Encore Series: Concert by Midori and Philharmonic String Ensemble Vienna</strong></h5><br/>
                        <h5 class="price-text-color">$880</h5>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 event-summary text-muted"><small>
                            Violinist Midori will return to Hong Kong with five musicians from the Vienna Philharmonic
                            Orchestra to perform Schubert's String Quintet in C and Brahms' String Sextet No. 2 in
                            G.</small>
                    </div>
                </div>
                <div class="separator clear-left">
                    <p class="btn-add">
                        <a class="btn btn-default  btn-block" href="#" role="button"
                            onclick="buyTicket(4);return false;">
                            <span class="glyphicon glyphicon-shopping-cart"></span> Buy ticket</a>

                    </p>
                </div>
                <div class="clearfix">
                </div>
            </div>
        </div>
    </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-3 pull-right">
            <a
              className="btn btn-primary pull-right  btn-block"
              href="cart.html"
              role="button"
            >
              <span className="glyphicon glyphicon-shopping-cart" /> View Cart
        </a>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="container">
          <p>
            <a href="#">About</a>&nbsp;&nbsp;·&nbsp;&nbsp;<a href="#">FAQs</a>
            &nbsp;&nbsp;·&nbsp;&nbsp;<a href="#">Terms of Use</a>
            &nbsp;&nbsp;·&nbsp;&nbsp;
        <a href="https://mp.marsdctr.gov.hk/index.html?version=demo">
              Payment Demo (Simple Version)
        </a>
          </p>
          <div className="row">
            <div className="col-xs-6">
              <a
                title="Explanation of WCAG 2.0 Level Double-A Conformance"
                href="#"
              >
                <img
                  src={require('./images/wcag2aa.gif')}
                  alt="Level Double-A conformance, W3C WAI Web Content Accessibility Guidelines 2.0"
                />
              </a>
            </div>
            <div className="col-xs-6 text-right">
              <a title="Brand Hong Kong" href="#">
                <img
                  title="Brand Hong Kong"
                  src={require('./images/brandhk.gif')}
                  alt="Brand Hong Kong"
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
