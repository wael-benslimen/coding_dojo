import {model, Schema} from 'mongoose' // Importing Mongoose's model and Schema constructors

// define the schema
const ContactSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, "Contact name is required"],
            minlength: [2, "Contact name must be at least 2 chars"],
            maxlength: [255, "Contact name must be less than 255 chars"]
        },
        phoneNumber: {
            type: Number,
            required: [true, "Contact number is required"],
            min: [10000000, "Phone number must be at least 8 digits long"]
        },
        birthdate: {
            type: Date,
            required: [true, "Birth data is required"],
            max: [Date.now(), "Birth date must be in the past"]
        },
        active: {
            type: Boolean,
            default: true
        }
    },
    {timestamps: true}
)

const Contact = model("Contact", ContactSchema)

export default Contact