import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPrints } from "store/actions/prints/fetchPrints";
import Print from "components/PrintItem";

const Prints = ({ fetchPrints, prints, isOpen }) => {
  useEffect(() => {
    fetchPrints();
  }, []);

  const printsList = prints
    ? prints.map((p) => <Print key={p._id} item={p} />)
    : null;

  return (
    <div className={`prints-screen ${isOpen ? "lock" : ""}`}>
      <div className="prints-container">{printsList}</div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  prints: state.prints.items,
  isOpen: state.nav.isOpen,
});

export default connect(mapStateToProps, { fetchPrints })(Prints);
