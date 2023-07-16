import mongoose from "mongoose";

const ResumeSchema = new mongoose.Schema({
  personalInfo: {
    Name: {
      type: String,
      required: true,
    },
    // lastName: {
    //     type: String,
    //     required: true,
    // },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: false,
    },
    linkedIn: {
      type: String,
      required: false,
    },
    github: {
      type: String,
      required: false,
    },
  },
  objective: {
    type: String,
    required: false,
  },
  education: [
    {
      school: {
        type: String,
        required: true,
      },
      degree: {
        type: String,
        required: true,
      },
      fieldOfStudy: {
        type: String,
        required: true,
      },
      startDate: {
        type: Date,
        required: true,
      },
      endDate: {
        type: Date,
        required: true,
      },
      description: {
        type: String,
        required: false,
      },
    },
  ],
  experience: [
    {
      jobTitle: {
        type: String,
        required: true,
      },
      company: {
        type: String,
        required: true,
      },
      startDate: {
        type: Date,
        required: true,
      },
      endDate: {
        type: Date,
        required: true,
      },
      description: {
        type: String,
        required: false,
      },
    },
  ],
  skills: [
    {
      type: String,
      required: false,
    },
  ],
  languages: [
    {
      language: {
        type: String,
        required: true,
      },
      proficiency: {
        type: String,
        required: true,
      },
    },
  ],
  certifications: [
    {
      name: {
        type: String,
        required: true,
      },
      issuer: {
        type: String,
        required: true,
      },
      date: {
        type: Date,
        required: true,
      },
    },
  ],
  references: [
    {
      name: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      company: {
        type: String,
        required: true,
      },
      contactInfo: {
        type: String,
        required: true,
      },
    },
  ],
  projects: [
    {
      name: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      link: {
        type: String,
        required: false,
      },
    },
  ],
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

export default mongoose.model("Resume", ResumeSchema);
