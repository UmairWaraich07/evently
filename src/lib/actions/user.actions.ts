"use server";

import { CreateUserParams, UpdateUserParams } from "@/types";
import { dbConnect } from "../database/dbConnect";
import userModel from "../database/models/user.model";
import { ErrorResponse } from "../utils";

export const createUser = async (user: CreateUserParams) => {
  try {
    await dbConnect();

    const newUser = await userModel.create(user);

    if (!newUser) {
      return ErrorResponse(500, "Failed to create the new user");
    }

    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    const err = error as Error;
    console.error("Error on creating user ", err);
    ErrorResponse(500, "Error on creating the user", err);
  }
};

export const updateUser = async (clerkId: string, data: UpdateUserParams) => {
  try {
    await dbConnect();

    const updatedUser = await userModel.findOneAndUpdate({ clerkId }, data, {
      new: true,
    });

    if (!updatedUser) {
      return ErrorResponse(500, "Failed to update the user");
    }

    return JSON.parse(JSON.stringify(updatedUser));
  } catch (error) {
    const err = error as Error;
    console.error("Error on updating the user ", err);
    ErrorResponse(500, "Error on updating the user", err);
  }
};

export const deleteUser = async (clerkId: string) => {
  try {
    await dbConnect();

    // TODO: complete the delete user server action
  } catch (error) {
    const err = error as Error;
    console.error("Error on deleting the user ", err);
    ErrorResponse(500, "Error on deleting the user", err);
  }
};
