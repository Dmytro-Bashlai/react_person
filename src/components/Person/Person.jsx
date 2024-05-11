export const Person = ({ person }) => {
  let isMarriedMessage = '';

  if (person.isMarried === true && person.sex === 'm') {
    isMarriedMessage = `${person.partnerName} is my wife`;
  } else if (person.isMarried === true && person.sex === 'f') {
    isMarriedMessage = `${person.partnerName} is my husband`;
  } else {
    isMarriedMessage = `I am not married`;
  }

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${person.name}`}</h2>
      {person.age !== undefined ? (
        <p className="Person__age">{`I am ${person.age}`}</p>
      ) : (
        ''
      )}
      <p className="Person__partner">{isMarriedMessage}</p>
    </section>
  );
};
