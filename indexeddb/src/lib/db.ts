import Dexie, { type Table } from 'dexie';

export interface Friend {
    id?: number;
    name: string;
    age: number;
}

export class Database extends Dexie {
    friends!: Table<Friend>;

    constructor() {
        super('example');
        this.version(1).stores({
            friends: '++id, name, age'
        })
    }
}

export const db = new Database();
