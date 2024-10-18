import { useSeriesContext } from "../../context/series-context";
import { FaHeartbeat, FaSkull, FaQuestion } from "react-icons/fa";
import { TbGenderGenderless } from "react-icons/tb";
import { IoIosMale, IoIosFemale } from "react-icons/io";
import { RiCloseLine } from "react-icons/ri";
const ModalCharacters = () => {
  const { modal, modifyModal } = useSeriesContext();
  const { character } = modal;

  const statusType = (option: string): JSX.Element => {
    if (option == "Alive") return <FaHeartbeat />;
    else if (option == "Dead") return <FaSkull />;
    else return <FaQuestion />;
  };

  const genderType = (option: string) => {
    if (option == "Male") return <IoIosMale />;
    else if (option == "Female") return <IoIosFemale />;
    else if (option == "Genderless") return <TbGenderGenderless />;
    else return <FaQuestion />;
  };

  return (
    <article
      className="modal"
      onClick={(e) => {
        (e.target as HTMLElement).className == "modal"
          ? modifyModal(character, false)
          : null;
      }}
    >
      <section className="modal__card">
        <section className="modal__card-header card-header">
          <p>{character.species}</p>
          <section
            className={`card-header__status card-header__status-${character.status}`}
          >
            {statusType(character.status)}
            <p>{character.status}</p>
          </section>
        </section>
        <img
          src={character.image}
          alt={`img-${character.name}`}
          className="modal__card-img"
        />
        <p className="modal__card-name">{character.name}</p>
        <section className="modal__card-info card-info">
          <p className="card-info__gender">
            {character.gender}
            {genderType(character.gender)}
          </p>
          <p className="card-info__location">{character.location.name}</p>
          <p className="card-info__origin">Origin: {character.origin.name}</p>
        </section>
        <button
          className="modal__card-btn"
          onClick={() => modifyModal(character, false)}
        >
          <RiCloseLine />
        </button>
      </section>
    </article>
  );
};

export default ModalCharacters;
