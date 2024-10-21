import { useSeriesContext } from "../../context/series-context";
import ButtonsPrevNext from "../ui/buttons-prev-next";
import Card from "../ui/card";
import ModalCharacters from "../ui/modal-characters";

const MainArticle = () => {
  const { modal, characters } = useSeriesContext();

  return (
    <main className="main-article">
      <article>
        <h2>Filter</h2>
      </article>

      <article className="main-article__characters">
        <ButtonsPrevNext />
        {characters.map((e) => (
          <Card key={e.id} character={e} />
        ))}
        <ButtonsPrevNext />
      </article>
      {modal.isOpen ? <ModalCharacters /> : null}
    </main>
  );
};

export default MainArticle;
