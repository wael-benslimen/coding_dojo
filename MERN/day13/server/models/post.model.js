import { model, Schema } from "mongoose";

const postSchema = new Schema({
  title: {
    type: String,
    required: [true, "title is required"],
    minlength: [2, "title must be atlest 2 chars"],
  },
  description: {
    type: String,
    required: [true, "desc is required"],
    minlength: [2, "title must be atlest 2 chars"],
    },
    reviwes: {
        type: [String],
        default: [],
    }
},
    {timestamps:true}
);

const Post = model('Post', postSchema)
export default Post
