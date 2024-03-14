

const poem = {
  lines: [
    "I write, erase, rewrite",
    "Erase again, and then",
    "A poppy blooms.",
  ],
};

export default function Poem() {
  return (
    <article >
      {poem.lines.map((line, idx, arr) =>
        idx !== arr.length - 1 ? (
          <div key={idx}>
          <p>
            {line}  
          </p>
          <hr />
          </div>
        ) : (
          <p>{line} </p>
        )
      )}
    </article>
  );
}