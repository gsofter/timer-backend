# timer-backend
Built with Typescript, Node.js, Graphql, Apollo-Graphql-Server, MongoDB Database

### Database design

```javascript
 type TimeEntry {
  id: String
  startTime: DateTime
  endTime: DateTime
  studentId: String
  taskName: String
}
```

Graphql Resolvers

```javascript
export const resolvers = {
  Query: {
    getTimeEntries(root: any, args: any) {
      console.log('Query: getTimeEntries', args)
      return Service.getTimeEntries();
    },
  },

  Mutation: {
    createTimeEntry(root: any, args: any) {
      console.log('Mutation: createTimeEntry', args);
      return Service.createTimeEntry(args.request);
    },
    updateTimeEntry(root: any, args: any) {
      console.log('Mutation: createTimeEntry', args);
      return Service.updateTimeEntry(args.entryId, args.request);
    },
    removeTimeEntry(root: any, args: any) {
      console.log('Mutation: createTimeEntry', args);
      return Service.removeTimeEntry(args.entryId);
    },
  },
};
```

Graphql Schema
```graphql
scalar DateTime
  type TimeEntry {
    id: String
    startTime: DateTime
    endTime: DateTime
    studentId: String
    taskName: String
  }

  input TimeEntryRequest {
    startTime: DateTime
    endTime: DateTime
    studentId: String
    taskName: String
  }

  type Query {
    getTimeEntries: [TimeEntry]
  }

  type Mutation {
    createTimeEntry(request: TimeEntryRequest): Boolean
    updateTimeEntry(entryId: String, request: TimeEntryRequest): Boolean
    removeTimeEntry(entryId: String): Boolean
  }
```

### Graphql Playground
![image](https://user-images.githubusercontent.com/49583931/118184237-b84d3780-b400-11eb-9356-9f11a98e9db5.png)

### MongoDB screenshot
![image](https://user-images.githubusercontent.com/49583931/118184344-d74bc980-b400-11eb-979a-54938d7a173d.png)

### How to run

Local development
```
npm install && npm run start:dev
```

Start production
```
npm start
```

Build
```
npm run build
```
