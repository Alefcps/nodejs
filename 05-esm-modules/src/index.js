import * as database from "./utils/database.js";


database.connectToDatabase("myDatabase");

database.disconnectDatabase( "myDatabase");