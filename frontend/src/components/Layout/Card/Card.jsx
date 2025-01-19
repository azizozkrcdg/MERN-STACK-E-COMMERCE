import "./Card.css";
import CardCoupon from "./CardCoupon";
import CardProgress from "./CardProgress";
import CardTable from "./CardTable";
import CardTotals from "./CardTotals";

const Card = () => {
  return (
    <section className="cart-page">
      <div className="container">
        <div className="cart-page-wrapper">
          <form className="cart-form">
            <CardProgress />
            <div className="shop-table-wrapper">
              <CardTable />
              <div className="actions-wrapper">
                <CardCoupon />
                <div className="update-cart">
                  <button className="btn">Update Cart</button>
                </div>
              </div>
            </div>
          </form>
          <div className="cart-collaterals">
            <CardTotals />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
