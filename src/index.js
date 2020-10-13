module.exports = function reverse (int) {
    int=int.toString().split('');
    console.log(int);
    let arr=[];
   for(let i=int.length-1; i>=0;i--){
        arr[int.length-1-i]=int[i];
   }
   arr=parseInt(arr.join(''),10);
    return arr;
}

