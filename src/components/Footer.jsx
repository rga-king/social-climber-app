import HapistaxLogo from './HapistaxLogo.jsx';
import { STATS_SOURCE_LINK } from '../lib/constants';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className='footer'>
      <small>
        Social Climber developed by <HapistaxLogo />. &copy; {year} All rights reserved.
      </small>
      <small>
        Social Media Post limits sourced from{' '}
        <a
          className='link'
          href={STATS_SOURCE_LINK}
          target='_blank'
          rel='noreferrer'
        >
          Buffer
        </a>
      </small>
    </footer>
  );
}
