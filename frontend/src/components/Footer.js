import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col>
  <>
    {/* Begin Mailchimp Signup Form */}
    <link
      href="//cdn-images.mailchimp.com/embedcode/classic-071822.css"
      rel="stylesheet"
      type="text/css"
    />
    <style
      type="text/css"
      dangerouslySetInnerHTML={{
        __html:
          "\n\t#mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif;  width:600px;}\n\t/* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.\n\t   We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */\n"
      }}
    />
    <div id="mc_embed_signup">
      <form
        action="https://gmail.us21.list-manage.com/subscribe/post?u=0e8a1660ac5f913544df89416&id=f003cae2bf&f_id=00b1c2e1f0"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        className="validate"
        target="_blank"
        noValidate=""
      >
        <div id="mc_embed_signup_scroll">
          <h2>Subscribe</h2>
          <div className="indicates-required">
            <span className="asterisk">*</span> indicates required
          </div>
          <div className="mc-field-group">
            <label htmlFor="mce-EMAIL">
              Email Address <span className="asterisk">*</span>
            </label>
            <input
              type="email"
              defaultValue=""
              name="EMAIL"
              className="required email"
              id="mce-EMAIL"
              required=""
            />
            <span id="mce-EMAIL-HELPERTEXT" className="helper_text" />
          </div>
          <div className="mc-field-group size1of2">
            <label htmlFor="mce-PHONE">Phone Number </label>
            <input
              type="text"
              name="PHONE"
              className=""
              defaultValue=""
              id="mce-PHONE"
            />
            <span id="mce-PHONE-HELPERTEXT" className="helper_text" />
          </div>
          <div id="mce-responses" className="clear foot">
            <div
              className="response"
              id="mce-error-response"
              style={{ display: "none" }}
            />
            <div
              className="response"
              id="mce-success-response"
              style={{ display: "none" }}
            />
          </div>{" "}
          {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
          <div
            style={{ position: "absolute", left: "-5000px" }}
            aria-hidden="true"
          >
            <input
              type="text"
              name="b_0e8a1660ac5f913544df89416_f003cae2bf"
              tabIndex={-1}
              defaultValue=""
            />
          </div>
          <div className="optionalParent">
            <div className="clear foot">
              <input
                type="submit"
                defaultValue="Subscribe"
                name="subscribe"
                id="mc-embedded-subscribe"
                className="button"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
    {/*End mc_embed_signup*/}
  </>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col className="text-center py-3">Copyright &copy; MYSHOP</Col>
        </Row>
      </Container>
    </footer>
  )
}
export default Footer
