export const Book = (props) => {
  console.log(props);

  const { image, title, author } = props;
  const handleClick = (title) => {
    console.log(title);
  };
  return (
    <article
      onMouseOver={() => {
        console.log(author);
      }}
    >
      {/* <Image />
      <Title />
      <Author /> */}
      {/* prop */}
      {/* <img src={props.image} alt="" />
      <h3>{props.title}</h3>
      <h6>{props.author}</h6> */}

      <img src={image} alt="" />
      <h3>{title}</h3>
      <h6>{author}</h6>
      {/* children prop */}
      {/* <p>{props.children}</p> */}
      {/* <p>{props.job}</p>
      <p>{props.discription}</p>
      <p>{props.number}</p> */}
      <button
        onClick={() => {
          handleClick(title);
        }}
      >
        Log Title
      </button>
    </article>
  );
};

