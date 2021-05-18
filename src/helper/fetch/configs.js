const configs = {
  BACKEND_URL:
    process.env.NODE_ENV === "development" ?
      "http://localhost:5000/" :
      "https://backend--infortts.herokuapp.com/"
}
export default configs;