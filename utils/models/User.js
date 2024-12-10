import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema(
    {
        firstName: {
            type: String,
            require: true,
        },
        lastName: {
            type: String,
            require: true,
        },
        phoneNumber: {
            type: String,
            unique: true,
            require: true,
            minLength: 12,
            maxLength: 12,
        },
        password: {
            type: String,
            require: true,
            minLength: 8,
        },
    },
    { timeStamp: true },
);

export default mongoose.models.User || mongoose.model('User', userSchema);
