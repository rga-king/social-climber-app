export default function Stats({ stats, charCount }) {
  return (
    <section className='stats'>
      {stats.map((stat) => (
        <Stat
          key={stat.id}
          label={stat.postType}
          value={stat.maxChars - charCount}
          icon={stat.icon}
          altTag={stat.socialMedia}
        />
      ))}
    </section>
  );
}

function Stat({ label, value, icon, altTag }) {
  return (
    <section className='stat'>
      <span className={` stat-number ${value < 0 ? 'stat-number-limit' : ''}`}>
        {value}
      </span>
      <div className='stat-info'>
        <img src={icon} alt={altTag} title={altTag} />
        <h2 className='stat-post-type'>{label}</h2>
      </div>
    </section>
  );
}
