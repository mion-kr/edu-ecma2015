import log, {getTime, getCurrentHour, MyLogger} from "./21. myLogger";

log('my first test data');
log('current hour is ${getCurrentHour}');

const logger = new MyLogger();
log(`lectures of .. : ${logger.getLectures()}`);