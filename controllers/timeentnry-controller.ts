import { TimeEntryModel } from '../models/timeentry-model';
import { ITimeEntry } from '../interfaces';

export const getTimeEntries = async (request: ITimeEntry) => {
    try {
        const res = await TimeEntryModel.find({})
        return res
    } catch(e) {
        throw new Error('internal error')
    }
};

export const createTimeEntry = async (request: ITimeEntry) => {
    try {
        await TimeEntryModel.create(request)
    } catch(e) {
        throw new Error('internal error')
    }
};

export const updateTimeEntry = async (id: string, request: ITimeEntry) => {
    try {
        await TimeEntryModel.updateOne({ id }, request)
    } catch(e) {
        throw new Error('internal error')
    }
};
