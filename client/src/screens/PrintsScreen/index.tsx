import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Lightbox from "components/Lightbox/Lightbox";
import Print from "components/Print";
import { IPrint } from "interfaces";
import { IState } from "interfaces/state";
import { fetchPrintsStart } from "store/actions/prints/fetchPrints";

const PrintsScreen: React.FC = () => {
  const dispatch = useDispatch();
  const list = useSelector((state: IState) => state.prints);
  const { loading, prints } = list;

  React.useEffect(() => {
    dispatch(fetchPrintsStart());
  }, [dispatch]);

  const [displayLightbox, setDisplayLightbox] = React.useState({
    current: 0,
    isOpen: false,
  });

  const printList = prints.map((p: IPrint, index) => (
    <Print
      key={p._id}
      print={p}
      index={index}
      setDisplayLightbox={setDisplayLightbox}
    />
  ));

  const renderLightbox = () =>
    displayLightbox.isOpen ? (
      <Lightbox
        setDisplayLightbox={setDisplayLightbox}
        current={displayLightbox.current}
        collection={prints}
      />
    ) : null;

  if (loading) return <p>Loading</p>;
  return (
    <div className="prints">
      {printList}
      {renderLightbox()}
    </div>
  );
};
export default PrintsScreen;
