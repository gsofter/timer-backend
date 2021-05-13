# timer-backend
Built with Typescript Node.js

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

### Database screenshot


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
