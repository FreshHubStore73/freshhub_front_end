'use server';

import Counter from '@/utils/models/Counter';
export default async function getNextCounter(entityType: string) {
    try {
        const counter = await Counter.findOneAndUpdate(
            { entityType },
            { $inc: { counterValue: 1 } },
            { new: true, upsert: true },
        );
        return counter.counterValue;
    } catch (error) {
        throw new Error(
            `Failed to generate counter  for ${entityType}: ${(error as Error).message}`,
        );
    }
}
