import { useSeriesContext } from "../../context/series-context";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const ButtonsPrevNext = () => {
  const { handlerClickSeries, prevNext } = useSeriesContext();

  return (
    <section className="prev-next">
      <button
        className="prev-next__btn prev-btn "
        onClick={() => handlerClickSeries("prev")}
        style={!prevNext.prev ? { color: "#949494", cursor: "auto" } : {}}
        disabled={!prevNext.prev}
      >
        <MdKeyboardArrowLeft className="prev-next__arrows" /> Prev
      </button>

      <button
        className="prev-next__btn next-btn"
        onClick={() => handlerClickSeries("next")}
        style={!prevNext.next ? { color: "#949494", cursor: "auto" } : {}}
        disabled={!prevNext.next}
      >
        Next <MdKeyboardArrowRight className="prev-next__arrows" />
      </button>
    </section>
  );
};

export default ButtonsPrevNext;
