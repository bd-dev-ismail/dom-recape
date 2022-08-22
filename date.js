const today = new Date();
console.log(today)

const date1 = new Date('1971-03-30');
const date2 = new Date('1971-12-19');
if(date1.getTime() < date2.getTime())
{
    console.log("March was before decembder");
}
else{
    console.log('Match was not before december');
}