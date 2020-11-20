import React from "react";
import Bookself from "../../../../Image/trump.jpg";
import Tem from "../../../../Image/tem.jpg";
import { Link } from "react-router-dom";
import Covid from "../../../../Image/covid.jpg";
import Cononal from "../../../../Image/cononal.jpg";

function Newsx() {
  return (
    <>
      <div
        className="news_news_box_home_home"
        style={{
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <div
          class="card"
          style={{
            width: "38%",
          }}
        >
          <img src={Bookself} class="card-img-top" alt="..." />
          <div class="card-body">
            <p
              class="card-text"
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <samp
                className="newa_box_box_heading"
                style={{
                  fontSize: "1.7rem",
                  fontFamily: "'Rubik', sans-serif",
                  fontWeight: "600",
                  cursor: "pointer",
                }}
              >
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </samp>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
              quaerat perferendis esse voluptas hic repellat, eaque odit vel sit
              modi maiores blanditiis iusto. Expedita eligendi rerum dolor
              adipisci enim libero error, dolorem vel pariatur nihil voluptate
              unde ratione facilis, odit recusandae suscipit accusantium quam
              deserunt dolorum. Consectetur molestiae sit quos itaque magnam
              facilis architecto, fugiat facere. Ratione quas hic possimus quam
              quod numquam voluptas, molestias eos minus odit officia magnam
              nobis, consectetur temporibus. Repellat voluptate assumenda, ab ea
              dolores facilis provident sequi explicabo obcaecati sed
              repudiandae tenetur ut ipsam accusamus eveniet vitae aspernatur
              voluptas. Illum dolore nostrum tenetur ipsum molestiae ea
              laudantium id soluta neque? Dignissimos culpa ea eaque commodi
              aliquam ab minus magni perspiciatis nam consequatur. Illo quam ea
              maiores eum! Totam provident repudiandae molestias quas tempora
              amet architecto aliquam nobis, voluptatibus labore libero
              necessitatibus dignissimos ut vero tenetur eum, et facilis saepe
            </p>
          </div>
        </div>

        <div className="box_news_news_one_on">
          <div class="card mb-3" style={{
            maxWidth: "540px"
          }}>
            <div
              class="row no-gutters"
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <div class="col-md-4">
                <img src={Bookself} class="card-img" alt="..." />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="card mb-3" style={{ maxWidth: "540px" }}>
            <div
              class="row no-gutters"
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <div class="col-md-4">
                <img src={Bookself} class="card-img" alt="..." />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="card mb-3" style={{ maxWidth: "540px" }}>
            <div
              class="row no-gutters"
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <div class="col-md-4">
                <img src={Bookself} class="card-img" alt="..." />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="card mb-3" style={{
            maxWidth: "540px"
          }}>
            <div
              class="row no-gutters"
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <div class="col-md-4">
                <img src={Bookself} class="card-img" alt="..." />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="card mb-3" style={{
            maxWidth: "540px"
          }}>
            <div
              class="row no-gutters"
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <div class="col-md-4">
                <img src={Bookself} class="card-img" alt="..." />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="news-box-box-off-off" >
          <div class="card" style={{
            maxWidth:"20%"
          }}>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Newsx;
