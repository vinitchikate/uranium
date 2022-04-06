const a = new Date()

const printDate = function printDate(){

    console.log('date is',a.getData())
}
const printMonth = function printMonth(){

    console.log('month is ',a.getMonth()+1)
}
const batchInfo = function batchInfo(){

   console.log('uranium',''+printDate()+'/'+printDate()+''+'the topic for today is nodejs module system')

}

module.exports.pull = {printDate,printMonth,batchInfo}