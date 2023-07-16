import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  resumes: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Resume",
      required: true,
    },
  ],
});

export default mongoose.model("User", userSchema);
