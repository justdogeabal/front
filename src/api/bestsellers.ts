export const getAladinBestsellers =  async ()=>{
  const res =await fetch("http://localhost:5000/bestseller");
  return res.json()
}