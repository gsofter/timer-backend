import mongoose, { Schema, Model, Document, Connection } from 'mongoose';

const timeEntrySchema = new Schema({
  id: { type: String },
  startTime: { type: Date },
  endTime: { type: Date },
  studentId: { type: String },
  taskName: { type: String }
})

export const TimeEntryModel = mongoose.model('time-entry', timeEntrySchema)