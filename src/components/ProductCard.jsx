import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import { Desktop, Tablet, Mobile, Default } from "../hooks/MediaQuery";

/* 여기서는 상위 페이지를 통해 props로 thumbNail 객체를 받아왔기 때문에
객체 로딩을 기다릴 필요가 없었던 것 같다.

그래서 객체가 반드시 있는 상태가 되어
삼항 연산자로 객체의 특정 속성을 바로 대조하고, 거짓 조건을 바로 적어도 되었다. */

const ProductCard = (props) => {
  const { thumbNail } = props;
  const navigate = useNavigate();

  const color = thumbNail?.color;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    customPaging: (i) => (
      <div
        style={{
          width: "13px",
          height: "13px",
          color: color[i],
          border: `1px solid transparent`,
          borderRadius: "50%",
          backgroundColor: color[i],
          zIndex: 1,
        }}
      >
        {/* {i + 1} */}
      </div>
    ),
  };

  return (
    <div className="shop-product-card">
      <Slider {...settings}>
        {/* thumbNail.thumbnail.map() */}
        <div
          onClick={() => {
            navigate("/shop/" + thumbNail.id);
          }}
        >
          {/* {thumbNail.category == "short" ? "short" : "long"} */}
          <div>
            {thumbNail.category == "short" ? (
              <img
                src={require(`../img/shirts-img/short/${thumbNail.thumbnail[0]}`)}
                style={{ maxWidth: "100%" }}
              ></img>
            ) : (
              <img
                src={require(`../img/shirts-img/long/${thumbNail.thumbnail[0]}`)}
                style={{ maxWidth: "100%" }}
              ></img>
            )}
          </div>
        </div>
        <div
          onClick={() => {
            navigate("/shop/" + thumbNail.id);
          }}
        >
          {/* {thumbNail.category == "short" ? "short" : "long"} */}
          <div>
            {thumbNail.category == "short" ? (
              <img
                src={require(`../img/shirts-img/short/${thumbNail.thumbnail[1]}`)}
                style={{ maxWidth: "100%" }}
              ></img>
            ) : (
              <img
                src={require(`../img/shirts-img/long/${thumbNail.thumbnail[1]}`)}
                style={{ maxWidth: "100%" }}
              ></img>
            )}
          </div>
        </div>
        <div
          onClick={() => {
            navigate("/shop/" + thumbNail.id);
          }}
        >
          {/* {thumbNail.category == "short" ? "short" : "long"} */}
          <div>
            {thumbNail.category == "short" ? (
              <img
                src={require(`../img/shirts-img/short/${thumbNail.thumbnail[2]}`)}
                style={{ maxWidth: "100%" }}
              ></img>
            ) : (
              <img
                src={require(`../img/shirts-img/long/${thumbNail.thumbnail[2]}`)}
                style={{ maxWidth: "100%" }}
              ></img>
            )}
          </div>
        </div>
        <div
          onClick={() => {
            navigate("/shop/" + thumbNail.id);
          }}
        >
          {/* {thumbNail.category == "short" ? "short" : "long"} */}
          <div>
            {thumbNail.category == "short" ? (
              <img
                src={require(`../img/shirts-img/short/${thumbNail.thumbnail[3]}`)}
                style={{ maxWidth: "100%" }}
              ></img>
            ) : (
              <img
                src={require(`../img/shirts-img/long/${thumbNail.thumbnail[3]}`)}
                style={{ maxWidth: "100%" }}
              ></img>
            )}
          </div>
        </div>
      </Slider>
      <p>
        {thumbNail.productName} {thumbNail.price}
      </p>
    </div>
  );
};

export default ProductCard;
