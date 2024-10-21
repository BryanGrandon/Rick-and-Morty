import { useSeriesContext } from "../../context/series-context";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const ButtonsPrevNext = () => {
  const { getInfoApi, prevNext } = useSeriesContext();

  const handlerClickSeries = (option: string) => {
    let url: string = option == "next" ? prevNext.next.url : prevNext.prev.url;
    getInfoApi(url);
  };

  const disabledStyle = {
    color: "#949494",
    cursor: "auto",
  };

  return (
    <section className="prev-next">
      <button
        className="prev-next__btn prev-btn "
        onClick={() => handlerClickSeries("prev")}
        style={!prevNext.prev.status ? disabledStyle : {}}
        disabled={!prevNext.prev.status}
      >
        <MdKeyboardArrowLeft className="prev-next__arrows" /> Prev
      </button>

      <button
        className="prev-next__btn next-btn"
        onClick={() => handlerClickSeries("next")}
        style={!prevNext.next.status ? disabledStyle : {}}
        disabled={!prevNext.next.status}
      >
        Next <MdKeyboardArrowRight className="prev-next__arrows" />
      </button>
    </section>
  );
};

export default ButtonsPrevNext;
