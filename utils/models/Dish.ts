import mongoose from 'mongoose';

const { Schema } = mongoose;

const dishSchema = new Schema<DishItem>(
    {
        productName: {
            type: String,
            unique: true,
            require: true,
        },
        photoUrl: {
            type: String,
            require: true,
        },
        description: {
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
    { timestamps: true },
);

export default mongoose.models.Dish || mongoose.model('Dish', dishSchema);
