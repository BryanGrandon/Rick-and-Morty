import { useSeriesContext } from "../../context/series-context";
import ButtonsPrevNext from "../ui/buttons-prev-next";
import Card from "../ui/card";
import ModalCharacters from "../ui/modal-characters";
import NoResultsFound from "../ui/no-results-found";
import Filter from "./filter";

const MainArticle = () => {
  const { modal, characters } = useSeriesContext();

  return (
    <main className="main-article">
      <Filter />

      <article className="main-article__characters">
        <ButtonsPrevNext />

        {characters ? (
          <article className="main-article__cards">
            {characters.map((e) => (
              <Card key={e.id} character={e} />
            ))}
          </article>
        ) : (
          <NoResultsFound />
        )}

        <ButtonsPrevNext />
      </article>
      {modal.isOpen ? <ModalCharacters /> : null}
    </main>
  );
};

export default MainArticle;
