const harryPotterBooks = [
  {
    id: 1,
    title: "Harry Potter and the Philosopher's Stone",
    releaseDate: "1997-06-26",
    description:
      "Harry Potter discovers he is a wizard on his 11th birthday when Hagrid escorts him to magic-teaching Hogwarts School...",
    pages: 223,
    cover: "images/philospher stone.jpeg",
    soldOut: false,
  },
  {
    id: 2,
    title: "Harry Potter and the Chamber of Secrets",
    releaseDate: "1998-07-02",
    description:
      "Back at Hogwarts, Harry hears strange whispers and discovers that the Chamber of Secrets has been opened...",
    pages: 251,
    cover: "images/chamber of secret.jpeg",
    soldOut: false,
  },
  {
    id: 3,
    title: "Harry Potter and the Prisoner of Azkaban",
    releaseDate: "1999-07-08",
    description:
      "Harry learns more about his parents’ past and confronts escaped prisoner Sirius Black while navigating time travel...",
    pages: 317,
    cover: "images/prisoner of azkaban.jpeg",
    soldOut: false,
  },
  {
    id: 4,
    title: "Harry Potter and the Goblet of Fire",
    releaseDate: "2000-07-08",
    description:
      "Harry is unwittingly entered into the dangerous Triwizard Tournament and faces dark forces at every turn...",
    pages: 636,
    cover: "images/goblet of fire.jpeg",
    soldOut: true,
  },
  {
    id: 5,
    title: "Harry Potter and the Order of the Phoenix",
    releaseDate: "2003-06-21",
    description:
      "With Voldemort’s return, Harry and his friends form Dumbledore’s Army to resist the oppressive Ministry’s interference.",
    pages: 766,
    cover: "images/order of pheonix.jpeg",
    soldOut: false,
  },
  {
    id: 6,
    title: "Harry Potter and the Half-Blood Prince",
    releaseDate: "2005-07-16",
    description:
      "Harry explores dark secrets of Voldemort’s past and finds a powerful book once owned by the Half‑Blood Prince.",
    pages: 607,
    cover: "images/half blood prince.jpeg",
    soldOut: false,
  },
  {
    id: 7,
    title: "Harry Potter and the Deathly Hallows part 1",
    releaseDate: "2007-07-21",
    description:
      "Harry, Ron, and Hermione skip their final year at Hogwarts to hunt Voldemort’s Horcruxes and confront him once and for all.",
    pages: 607,
    cover: "images/deathly hallows.jpeg",
    soldOut: false,
  },
  {
    id: 8,
    title: "Harry Potter and the Deathly Hallows part 2",
    releaseDate: "2000-07-21",
    description:
      "Harry, Ron, and Hermione skip their final year at Hogwarts to hunt Voldemort’s Horcruxes and confront him once and for all.",
    pages: 607,
    cover: "images/deathly hallows.jpeg",
    soldOut: false,
  },
];

function Body() {
  return (
    <div className="main">
      <h2>OUR BOOKS</h2>
      <p>
        Authentic JK rowling books. 7 interesting books to choose from. All from
        our stores, all well packed, all neat and clean.
      </p>
      <ul className="books">
        {harryPotterBooks.map((book) => (
          <li className="book" key={book.id}>
            <img src={book.cover} alt={book.title} />
            <p>{book.title}</p>
            <p>{book.description}</p>
            <span>{book.releaseDate}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Body;
