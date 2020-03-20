import SeasonTickets from './season-tickets';
import TrainerCards from './trainer-cards';
import {activeForEeachNodeListForIE} from './utils';

activeForEeachNodeListForIE();

const seasonTickets = new SeasonTickets();
seasonTickets.active();
const trainerCard = new TrainerCards();
trainerCard.active();
