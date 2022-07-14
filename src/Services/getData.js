const re = async () => {
   const response =  await fetch("http://127.0.0.1:5000/api/get")
   return response.json()
}
export default re