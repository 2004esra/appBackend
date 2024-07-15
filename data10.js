

const fs = require("fs")

const addPerson = (id , fname , lname ) => {
     const allData = loadInfo()

     const duplicatedData = allData.filter((obj) =>{
        return  obj.id === id 
     })

      if (duplicatedData.length == 0  ){

     allData.push({
       id : id,
       fname : fname,
       lname : lname
       
     })
     savealldata(allData)
    } else {
      console.log("ERROR DUPLICATED DATA")
    }
}

/////////////////////////////////////////////////////////////////////

const loadInfo = () => {
  try { 
      const dataJson = fs.readFileSync("data10.json").toString()
      return  JSON.parse(dataJson)
  }
  catch {
      return []
  }
   
}

/////////////////////////////////////////////////////////////////////

const savealldata = (allData) => {
   const saveallDataJson  = JSON.stringify(allData)
   fs.writeFileSync("data10.json" , saveallDataJson)
}

///////////////////////////////////////////////////////////////////////



 const deleteData  = (id) =>{
    const allData = loadInfo()

     const dataTokeep = allData.filter((obj) => {
        return obj.id !== id
     })

    
     savealldata(dataTokeep)
    
 }

//////////////////////////////////////////////////////////

const readData =(id)=>{
    const allData =loadInfo()
    const dataNeeded = allData.find((obj)=>{
        return obj.id==id
    })

    if(dataNeeded){
        console.log(dataNeeded)
    }else{
        console.log("id NOT FOUNDED")
    }
}


/

//////////////////////////////////////////////////////////////

const listData = ()=>{
    const allData = loadInfo()

   allData.forEach((obj)=> {
    console.log(obj.fname , obj.lname)
   })
}


     

module.exports = {
  addPerson,
  deleteData,
  readData,
  listData
}