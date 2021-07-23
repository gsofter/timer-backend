import mongoose, { Schema, Model, Document, Connection } from 'mongoose';

const timeEntrySchema = new Schema({
  startTime: { type: Date },
  endTime: { type: Date },
  studentId: { type: String },
  taskName: { type: String },
});

timeEntrySchema.virtual('id').get(function (this: any) {
  return this._id.toHexString();
});

export const TimeEntryModel = mongoose.model('time-entry', timeEntrySchema);
