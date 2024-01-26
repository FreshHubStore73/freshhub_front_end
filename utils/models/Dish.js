import mongoose from 'mongoose';

const { Schema } = mongoose;

const dishSchema = new Schema(
    {
        category: {
            type: String,
            require: true,
        },
        title: {
            type: String,
            unique: true,
            require: true,
        },
        picture: {
            type: String,
            require: true,
        },
        descr: {
            type: String,
            require: true,
        },
        price: {
            type: Number,
            require: true,
        },
        weight: {
            type: String,
            require: true,
        },
    },
    { timeStamp: true },
);

export default mongoose.models.Dish || mongoose.model('Dish', dishSchema);
