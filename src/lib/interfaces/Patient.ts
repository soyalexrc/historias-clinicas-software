import {Timestamp} from "@firebase/firestore-types";

export interface Patient {
    name: string;
    datetime: Timestamp,
    datetimeString: string;
    service: string;
    attend: boolean;
    id: string;
}
