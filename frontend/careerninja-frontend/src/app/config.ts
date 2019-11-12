import {
  environment
} from '../environments/environment';

export const API_CONFIG = {
  LOCATIONS: environment.API_URL + 'list',
  BATTLES: environment.API_URL + 'search'
};
