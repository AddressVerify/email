const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://milessobhani:wB2zxC6Ry4jkZVCL@cluster0.fccq4.mongodb.net/SendMatic?retryWrites=true&w=majority', {
    dbName: 'SendMatic',
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, err => err ? console.log(err) : 
  console.log('Connected to SendMatic'));
  
const db = mongoose.connection;
  
const JobSchema = new mongoose.Schema({
    jobName:String,
    timeOfCompletion: Date,
    verifiedTotal: Number,
    verifiedValid: Number,
  })
  
const CollectionSchema = new mongoose.Schema({
    userName:String,
    collectionName:String,
    collectionTotal: Number,
    collectionValid: Number,
    collectionResults: Array,
    jobs:[JobSchema]
  })

const UserSchema = new mongoose.Schema({
  name:String,
  email:String,
  collections: [CollectionSchema]
    
      
  });


const User = mongoose.model('User', UserSchema);
const Collection = mongoose.model('Collection', CollectionSchema);
const Job = mongoose.model('Job', JobSchema);

const Miles = new User({
  name:'Miles',
  email:'MilesSobhani@gmail.com',
  collections:[]
})
Miles.save()

const addCollection = (user, collectionName, callback) => {
  const collection = new Collection({
    userName:user,
    collectionName:collectionName,
    collectionTotal:0,
    collectionValid:0,
    collectionResults:[],
    jobs:[]
  });
  User.findOne({user: user}).then((client) => {
    client.collections.push(collection);
    callback(null, collection)
    client.save().catch((err) => {callback(err,null)})
  });
}

const addJob = (user, collectionNumber, data, callback) => {
  const job = new Job({
    jobName: data.jobName,
    timeOfCompletion: data.date,
    verifiedTotal: data.verifiedTotal,
    verifiedValid: data.verifiedValid,
  })
  User.findOne({user: user}).then((client) => {
    client.collections[collectionNumber].jobs.push(job);
    client.save().then((data) =>{
      callback(null, data)
    })
    .catch((err) => {callback(err, null)
    });
  });
}

module.exports = {
  addJob,
  addCollection
}