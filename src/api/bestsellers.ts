
export const loadBestSellerListFromA = async ()=>{
  const res =await fetch(`https://www.aladin.co.kr/ttb/api/ItemList.aspx?ttbkey=${import.meta.env.VITE_TTBKey}&QueryType=Bestseller&MaxResults=10&start=1&SearchTarget=Book&output=js&Version=20131101&Cover=MidBig&OPtResult=ebookList,usedList`)
  console.log(res.json())
}

