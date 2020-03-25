import SeasonTickets from './season-tickets';
import Trainers from './trainers';
import Reviews from './reviews';
import FreeLesson from './free-lesson';
import {activeForEeachNodeListForIE} from './utils';

activeForEeachNodeListForIE();

const seasonTickets = new SeasonTickets();
seasonTickets.active();

const trainers = new Trainers();
trainers.active();
const reviews = new Reviews();
reviews.active();
const freeLesson = new FreeLesson();
freeLesson.active();
