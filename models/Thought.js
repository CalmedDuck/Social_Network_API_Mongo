const { Schema, model, Types } = require('mongoose');
const moment = require('moment'); // Import moment

// Reaction Schema
const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => moment(createdAtVal).format('MMMM Do YYYY, h:mm:ss a') // Format the date with moment
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false, // Set to false because this is a subdocument
  }
);

// Thought Schema
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => moment(createdAtVal).format('MMMM Do YYYY, h:mm:ss a') // Format the date with moment
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema] // Embedded reaction schema
  },
  {
    toJSON: {
      virtuals: true,
      getters: true, // Apply getters when converting to JSON
    },
    id: false,
  }
);

// Create a virtual called `reactionCount` that retrieves the length of the thought's reactions array field on query.
thoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
