import mongoose from 'mongoose';

const { Schema } = mongoose;

const counterSchema = new Schema({
    entityType: { type: String, required: true, unique: true },
    counterValue: { type: Number, default: 0 },
});

export default mongoose.models.Counter || mongoose.model('Counter', counterSchema);
