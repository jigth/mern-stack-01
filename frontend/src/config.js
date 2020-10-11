const API_HOST = process.env.REACT_APP_API_HOST || "localhost";
const API_PORT = process.env.REACT_APP_API_PORT || 4700;
const API_BASE_URL = `http://${API_HOST}:${API_PORT}/api`;

module.exports = {
    API_HOST,
    API_PORT,
    API_BASE_URL
}