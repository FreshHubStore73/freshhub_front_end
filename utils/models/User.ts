import mongoose, { Schema } from 'mongoose';
import { UserDB } from '@/types/auth';

const userSchema = new Schema<UserDB>(
    {
        userId: {
            type: String,
            required: true,
            unique: true,
        },
        name: {
            type: String,
        },
        lastName: {
            type: String,
            default: null,
        },
        // @ts-ignore
        phoneNumber: {
            type: String,
            unique: [true, 'Phone number must be unique'],
            sparse: true,
            default: null,
            minLength: 12,
            maxLength: 12,
        },
        password: {
            type: String,
            default: null,
            minLength: 8,
        },
        email: {
            type: String,
            default: null,
            set: (val: string) => (val ? val.toLowerCase() : null),
        },
        image: {
            type: String,
            default: null,
        },
        role: {
            type: String,
            enum: ['admin', 'user', 'superadmin'],
            default: 'user',
            required: true,
        },
    },
    {
        timestamps: true,
    },
);

// userSchema.set('toJSON', {
//     virtuals: true,
//     transform: function (doc, ret) {
//         delete ret._id;
//         delete ret.__v;
//         return ret;
//     },
// });

export default mongoose.models.User || mongoose.model('User', userSchema);
