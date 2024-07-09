import mongoose from "mongoose";

type ConnectionObject = {
  isConnected?: number; // this is optional but if it is present then it must be a number
};

// initially we set ConnectionObject to null that is {}
// cuz connectionObject will return a number to check if Db is connected or not
const connection: ConnectionObject = {};

//promis is telling that we connect with db we will get something back like any data
// void tell i dont care which type of data i get
async function dbConnect(): Promise<void> {
  // check if already connection is available or not (cuz nextjs only make connection when client request for it, while in react we dont need to check this cuz connection is already available)
  if (connection.isConnected) {
    console.log("Already connected to database");
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI || "", {});

    // here we are setting that number from db that tell if db is connected or not
    // Set the connection state based on the actual connection readyState
    connection.isConnected = db.connections[0].readyState;

    console.log("DB Connected Successfully");
  } catch (error) {
    console.log("DB Connected Failed", error);
    process.exit(1);
  }
}

export default dbConnect;
