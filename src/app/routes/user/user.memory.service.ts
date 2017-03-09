import { InMemoryDbService } from 'angular-in-memory-web-api';

export class UserMemoryData implements InMemoryDbService {
    createDb(): {} {
        let users = new Array(30).fill({}).map((item, index) => {
            return {
                id: index + 1,
                name: 'name ' + index,
                age: index + 18,
                created: new Date()
            }
        })
        return { users };
    }
}
