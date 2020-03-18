import SeasonTickets from './season-tickets';
import {activeForEeachNodeListForIE} from './utils';

activeForEeachNodeListForIE();
const seasonTickets = new SeasonTickets();
seasonTickets.active();
