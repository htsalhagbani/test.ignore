import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema(

{

username: {

type: String,

required: true,

unique: true

},

email: {

type: String,

required: true,

unique: true

},

password: {

type: String,

required: true

},

blogs: [{

type: mongoose.Schema.Types.ObjectId,

ref: 'artical'

}]

},

{ timestamps: true } // This adds createdAt and updatedAt timestamps for each article`

);


const User = mongoose.model('User', userSchema); // Capitalize model name

export default User; // Export the model
