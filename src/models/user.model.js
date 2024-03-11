import mongoose, { Schema } from "mongoose";

// Check if UserModel already exists
const UserModel =
  mongoose.models.User ||
  mongoose.model(
    "User",
    new Schema(
      {
        userName: {
          type: String,
          required: true,
          unique: true,
          lowercase: true,
          trim: true,
          index: true,
        },
        email: {
          type: String,
          required: true,
          unique: true,
          lowercase: true,
          trim: true,
        },
        fullName: {
          type: String,
          required: true,
          trim: true,
          index: true,
        },
        avatar: {
          type: String,
          required: true,
        },
        watchHistory: [
          {
            type: Schema.Types.ObjectId,
            ref: "Video",
          },
        ],
        password: {
          type: String,
          required: [true, "Password is required"],
        },
      },
      {
        timestamps: true,
      }
    )
  );

export { UserModel };
