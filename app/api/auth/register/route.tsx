import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import { BaseUserByCredentials, BaseUserByGoogle, UserDB } from "@/types/auth";

import connect from "@/utils/db";
import User from "@/utils/models/User";
import { Types } from "mongoose";

export const POST = async (request: Request) => {
    const data = (await request.json()) as BaseUserByGoogle | BaseUserByCredentials;

    let newUserData;

    if ('password' in data) newUserData = {
        ...data,
        password: await bcrypt.hash(data.password!, 5),
        userId: new Types.ObjectId().toString(),
        role: 'user'
    };

    if ('id' in data) {
        const { id, ...restData } = data;
        newUserData = {
            ...restData,
            userId: id,
            role: 'user'
        }
    };

    try {
        await connect();
        const user = await User.create(newUserData!) as UserDB;
        const res = {
            name: user.name ?? null,
            email: user.email ?? null,
            image: user.image ?? null,
            phoneNumber: user.phoneNumber ?? null,
            lastName: user.lastName ?? null,
            role: user.role as UserDB['role'],
            userId: user.userId,
        };
        return NextResponse.json(res, {
            status: 201,
        });
    } catch (error) {
        return new NextResponse((error as Error).message, {
            status: 500,
        });
    }
};