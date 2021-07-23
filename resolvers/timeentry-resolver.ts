import * as _ from 'lodash';
import * as Service from '../controllers';
export const resolvers = {
  Query: {
    getTimeEntries(root: any, args: any) {
      console.log('Query: getTimeEntries', args);
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
