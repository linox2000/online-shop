const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let _db;
const mongoConnect =(cb)=>{

  MongoClient.connect(
    "mongodb+srv://mlino:linox2017@@@cluster0.dkcqy.mongodb.net/shop?retryWrites=true&w=majority",
    { useUnifiedTopology: true }
  )
    .then(client =>{
      console.log('Connected');
      _db = client.db()
      cb();
    })
    .catch(err =>{
      console.log(err);
      throw err;
  
    });
};

const getDb = () =>{
  if(_db){
    return _db
  }
  throw 'No database found!'
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
