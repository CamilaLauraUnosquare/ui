const DEVELOPMENT_MODE = "development";
const BASE_API_URL =
  process.env.NODE_ENV === DEVELOPMENT_MODE
    ? process.env.REACT_APP_BASE_URL_DEV
    : process.env.REACT_APP_BASE_URL_PRODUCTION;

console.log(`We are on ${process.env.NODE_ENV} mode`);

const HEADERS = {
  "Access-Control-Allow-Origin": "*",
};
export { BASE_API_URL, HEADERS };
