import HapistaxLogo from './HapistaxLogo.jsx';
import { STATS_SOURCE_LINK } from '../lib/constants';

export default function Footer() {
  return (
    <footer className='footer'>
      <small>
        Personal project by <HapistaxLogo />
      </small>
      <small>
        Social Media Post limits sourced from{' '}
        <a href={STATS_SOURCE_LINK} target='_blank' rel='noreferrer'>
          Buffer
        </a>
      </small>
    </footer>
  );
}
