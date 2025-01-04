import mongoose from 'mongoose';

const { Schema } = mongoose;

const categorySchema = new Schema<CategoryItem>(
    {
        name: {
            type: String,
            unique: true,
            require: true,
        },
        path: {
            type: String,
            unique: true,
            require: true,
        },
    },
    { timestamps: true },
);

export default mongoose.models.Category || mongoose.model('Category', categorySchema);
