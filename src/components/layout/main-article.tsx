import { useSeriesContext } from "../../context/series-context";
import ButtonsPrevNext from "../ui/buttons-prev-next";
import Card from "../ui/card";
import ModalCharacters from "../ui/modal-characters";
import Search from "../ui/search";

const MainArticle = () => {
  const { modal, characters } = useSeriesContext();

  return (
    <main className="main-article">
      <article className="main-article__search">
        <Search />
      </article>

      <article className="main-article__characters">
        <ButtonsPrevNext />

        {characters ? (
          <article className="main-article__characters">
            {characters.map((e) => (
              <Card key={e.id} character={e} />
            ))}
          </article>
        ) : (
          <article>No results found</article>
        )}

        <ButtonsPrevNext />
      </article>
      {modal.isOpen ? <ModalCharacters /> : null}
    </main>
  );
};

export default MainArticle;
