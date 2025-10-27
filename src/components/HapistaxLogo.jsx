export default function HapistaxLogo({ hasLink = true }) {
  if (hasLink) {
    return (
      <a
        className='hapistax-link'
        href='https://hapistax.netlify.app'
        target='_blank'
        rel='noreferrer'
      >
        <Logo />
      </a>
    );
  } else {
    return <Logo />;
  }
}

function Logo() {
  return (
    <span className='hapistax'>
      <span>HAP</span>
      <span className='i'>i</span>
      <span>STAX</span>
    </span>
  );
}
