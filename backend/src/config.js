const MONGODB_HOST = process.env.MONGODB_HOST || "localhost";
const MONGODB_DATABASE = process.env.MONGODB_DATABASE || "testdb";
const MONGODB_USER = process.env.MONGODB_USER;
const MONGODB_PASSWORD = process.env.MONGODB_PASSWORD;

const mongoServerDataIsDefined = MONGODB_USER !== undefined  
                                && MONGODB_PASSWORD !== undefined  // User and password configured in environment variables
                                && MONGODB_HOST.includes('cluster');  // Very basic verification for Atlas Cluster

const DATABASE_URI = mongoServerDataIsDefined
    ? `mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_HOST}/${MONGODB_DATABASE}?retryWrites=true&w=majority`
    : `mongodb://${MONGODB_HOST}/${MONGODB_DATABASE}`;

module.exports = {
    DATABASE_URI
}