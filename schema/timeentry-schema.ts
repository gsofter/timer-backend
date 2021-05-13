import { gql } from "apollo-server-core";

export const schema = gql`
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
    getTimeEntries(userId: String): [TimeEntry]
  }

  type Mutation {
    createTimeEntry(entryId: String, request: TimeEntryRequest): Boolean
    updateTimeEntry(entryId: String, request: TimeEntryRequest): Boolean
  }
`
