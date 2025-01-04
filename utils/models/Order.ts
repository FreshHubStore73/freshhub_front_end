import mongoose from 'mongoose';
import getNextCounter from '../getCounter';

const { Schema } = mongoose;

const orderedDishSchema = new Schema<OrderedDish>(
    {
        dishId: {
            type: String,
            required: true,
            ref: 'Dish',
        },
        productName: {
            type: String,
            required: true,
        },
        quantity: {
            type: Number,
            required: true,
            validate: {
                validator: Number.isInteger,
                message: 'Quantity must be an integer',
            },
        },
        price: {
            type: Number,
            required: true,
            validate: {
                validator: (value: number) => !isNaN(value),
                message: 'Price must be a valid number',
            },
        },
        photoUrl: {
            type: String,
            required: true,
        },
    },
    {
        _id: false,
    },
);
const orderSchema = new Schema<OrderItemDB>(
    {
        orderNumber: {
            type: Number,
            unique: true,
        },
        userId: {
            type: String,
            required: true,
            ref: 'User',
        },
        deliveryTime: {
            type: String,
            default: null,
        },
        recipient: {
            type: String,
            required: true,
        },
        phoneNumber: {
            type: String,
            required: true,
        },
        comment: {
            type: String,
            default: null,
        },
        numberOfPersons: {
            type: Number,
            default: 1,
            validate: {
                validator: Number.isInteger,
                message: 'Number of persons must be an integer',
            },
        },
        call: {
            type: Boolean,
            required: true,
        },
        paymentType: {
            type: String,
            required: true,
            enum: ['cash', 'card'],
        },
        totalAmount: {
            type: Number,
            required: true,
            validate: {
                validator: (value: number) => !isNaN(value),
                message: 'Total amount must be a valid number',
            },
        },
        cashSum: {
            type: Number,
            validate: {
                validator: (value: number) => !isNaN(value),
                message: 'Cash sum must be a valid number',
            },
        },
        paymentStatus: {
            type: Boolean,
            default: false,
        },
        orderStatus: {
            type: String,
            default: 'In progress',
            enum: ['In progress', 'Done', 'Rejected'],
        },
        deliveryAddress: {
            type: String,
            required: true,
        },
        items: [orderedDishSchema],
    },
    {
        timestamps: true,
    },
);

orderSchema.pre('save', async function (next) {
    if (this.isNew) {
        this.orderNumber = await getNextCounter('order');
    }
    next();
});

export default mongoose.models.Order || mongoose.model('Order', orderSchema);
