// Three-column expertise matrix (software / frontend / web design).
const columns = [
  {
    title: 'Software development',
    items: ['API design', 'Node.js', 'Databases', 'Testing & CI'],
  },
  {
    title: 'Frontend development',
    items: ['React', 'Responsive UI', 'State & routing', 'Performance'],
  },
  {
    title: 'Web design',
    items: ['Layout systems', 'Design tokens', 'Prototypes', 'Accessibility'],
  },
];

const MyExpertise = () => {
  return (
    <section className="my-expertise" id="expertise" aria-labelledby="expertise-heading">
      <h2 id="expertise-heading" className="my-expertise__title">
        My expertise
      </h2>
      <div className="my-expertise__table-wrap">
        <table className="expertise-table">
          <thead>
            <tr>
              {columns.map((col) => (
                <th key={col.title} className="expertise-table__head">
                  {col.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {columns.map((col) => (
                <td key={col.title} className="expertise-table__cell">
                  <ul className="expertise-table__list">
                    {col.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default MyExpertise;
