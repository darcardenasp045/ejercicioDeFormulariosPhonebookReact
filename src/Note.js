const Note = ({ id, name, phone }) => {
  return (
    <div>
      <p>{id}</p>
      <p>
        <strong>{name}</strong>
      </p>
      {phone}
    </div>
  );
};

export default Note;
