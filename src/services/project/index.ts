import qa from './qa';
import rc from './rc';
import production from './production';
import type { UrlInter } from '@/types/services/project';
let config;
switch (import.meta.env.MODE) {
  case 'production':
    config = production;
    break;
  case 'qa':
    config = qa;
    break;
  default:
    config = rc;
    break;
}
export default config as UrlInter;
