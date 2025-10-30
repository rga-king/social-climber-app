import instagramIcon from '../assets/icons/instagram.svg';

export default function Stats({ stats }) {
  return (
    <section className='stats'>
      {stats.map((stat) => (
        <Stat key={stat.label} label={stat.label} value={stat.value} />
      ))}
    </section>
  );
}

function Stat({ label, value }) {
  return (
    <section className='stat'>
      <span
        className={` stat__number ${value < 0 ? 'stat__number--limit' : ''}`}
      >
        {value}
      </span>
      <div className='stat-info'>
        <img src={instagramIcon} alt="info icon" title="Instagram" />
        <h2 className='second-heading'>{label}</h2>
      </div>
    </section>
  );
}
