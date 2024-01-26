import mongoose from 'mongoose';

const { Schema } = mongoose;

const categorySchema = new Schema(
    {
        name: {
            type: String,
            unique: true,
            require: true,
        },
    },
    { timeStamp: true },
);

export default mongoose.models.Category || mongoose.model('Category', categorySchema);
