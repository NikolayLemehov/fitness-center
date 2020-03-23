import SeasonTickets from './season-tickets';
import Trainers from './trainers';
import Reviews from './reviews';
import {activeForEeachNodeListForIE} from './utils';

activeForEeachNodeListForIE();

const seasonTickets = new SeasonTickets();
seasonTickets.active();

const trainers = new Trainers();
trainers.active();
const reviews = new Reviews();
reviews.active();
