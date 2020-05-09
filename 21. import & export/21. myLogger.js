export default function log(data){
    console.log(data);
}


export const getTime = () => Date.now();

export const getCurrentHour = () => (new Date).getHours();

/* Class */
export class MyLogger {
    constructor(props){
        this.lectures = ['java', 'iOS'];
    }

    getLectures(){
        return this.lectures;
    }
}