import { icons } from './iconData';
import {
  INSTAGRAM_POST_REEL_MAX_CHARACTERS,
  INSTAGRAM_FIRST_COMMENTS_MAX_CHARACTERS,
  INSTAGRAM_STORY_CAPTIONS_MAX_CHARACTERS,
  X_FREE_MAX_CHARACTERS,
  X_BASIC_PREMIUM_MAX_CHARACTERS,
  FACEBOOK_POST_REEL_MAX_CHARACTERS,
  FACEBOOK_FIRST_COMMENTS_MAX_CHARACTERS,
  TIKTOK_BUSINESS_MAX_CHARACTERS,
  PINTEREST_BOARDS_MAX_CHARACTERS
} from '../lib/constants';

export const socialMediaStats = [
  {
    id: 'instaPostReel',
    socialMedia: 'Instagram',
    postType: 'post/reel captions',
    maxChars: INSTAGRAM_POST_REEL_MAX_CHARACTERS,
    icon: icons.instagram
  },
  {
    id: 'instaFirstComments',
    socialMedia: 'Instagram',
    postType: 'first comments',
    maxChars: INSTAGRAM_FIRST_COMMENTS_MAX_CHARACTERS,
    icon: icons.instagram
  },
  {
    id: 'instaStoryCaptions',
    socialMedia: 'Instagram',
    postType: 'story captions',
    maxChars: INSTAGRAM_STORY_CAPTIONS_MAX_CHARACTERS,
    icon: icons.instagram
  },
  {
    id: 'xFreeUser',
    socialMedia: 'X',
    postType: 'free users',
    maxChars: X_FREE_MAX_CHARACTERS,
    icon: icons.x
  },
  {
    id: 'xBasicPremium',
    socialMedia: 'X',
    postType: 'basic/premium/premium +',
    maxChars: X_BASIC_PREMIUM_MAX_CHARACTERS,
    icon: icons.x
  },
  {
    id: 'facebookPostReel',
    socialMedia: 'Facebook',
    postType: 'post/reel captions',
    maxChars: FACEBOOK_POST_REEL_MAX_CHARACTERS,
    icon: icons.facebook
  },
  {
    id: 'facebookFirstComments',
    socialMedia: 'Facebook',
    postType: 'first comments',
    maxChars: FACEBOOK_FIRST_COMMENTS_MAX_CHARACTERS,
    icon: icons.facebook
  },
  {
    id: 'tikTokBusiness',
    socialMedia: 'TikTok',
    postType: 'business accounts',
    maxChars: TIKTOK_BUSINESS_MAX_CHARACTERS,
    icon: icons.tiktok
  },
  {
    id: 'pinterest',
    socialMedia: 'Pinterest',
    postType: 'Pinterest boards',
    maxChars: PINTEREST_BOARDS_MAX_CHARACTERS,
    icon: icons.pinterest
  }
];
