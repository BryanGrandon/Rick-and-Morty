import React from "react";
import { IoIosArrowDown, IoIosArrowBack } from "react-icons/io";

type Dropdown = {
  title: string;
  arrayElements: string[];
  handlerSubmit: (element: string) => void;
};

const Dropdown = ({
  title,
  arrayElements,
  handlerSubmit,
}: Dropdown): JSX.Element => {
  const [isActive, setIsActive] = React.useState<boolean>(false);
  const [selected, setSelected] = React.useState<string>(arrayElements[0]);

  interface DropdownItemI {
    id: number;
    text: string;
  }

  const dropdownItems = (array: string[]): DropdownItemI[] => {
    let items: DropdownItemI[] = [];
    for (let i = 0; i < array.length; i++) {
      const item = {
        id: i,
        text: array[i],
      };
      items.push(item);
    }
    return items;
  };
  const children = dropdownItems(arrayElements);

  const handlerClickItem = (element: string) => {
    setSelected(element);
    handlerSubmit(element);
  };

  return (
    <article className="dropdown">
      <section
        className="dropdown__header"
        onClick={() => setIsActive(!isActive)}
      >
        <p>
          {title} <span className="dropdown__selected">{selected}</span>
        </p>
        {isActive ? (
          <IoIosArrowDown className="dropdown__icon" />
        ) : (
          <IoIosArrowBack className="dropdown__icon" />
        )}
      </section>
      <section className="dropdown__main">
        {isActive ? (
          <section
            className="dropdown__items"
            onClick={() => setIsActive(!isActive)}
          >
            {children.map((e) => (
              <p
                className="dropdown__items__item"
                key={e.id}
                onClick={() => handlerClickItem(e.text)}
              >
                {e.text}
              </p>
            ))}
          </section>
        ) : null}
      </section>
    </article>
  );
};

export default Dropdown;
