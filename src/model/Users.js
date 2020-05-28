import { SchemaTypes } from 'mongoose';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { uuidv4 } = require('uuid');

const UserSchema = new Schema({
  users: {
    name: {
      type: String,
      default: 'user' + uuidv4,
    },
    questions: [
      {
        question: { type: SchemaTypes.ObjectId, required: true },
        answer: { type: Boolean, required: true },
      },
    ],
  },
});

export default mongoose.models.Users || mongoose.model('Questions', UserSchema);
