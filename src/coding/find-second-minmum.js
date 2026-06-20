

const number =[1,3,4,5,5,6,7,9];

const findSecondMininm=(num)=>{

    const sorted = num.sort((a,b)=>a-b);

    return sorted[1]
}

const findDublicate =(num)=>{

    const dublicate = num.filter((n,index)=>num.indexOf(n)===index);

    return dublicate;
}

const findMissingNumber =(arr)=>{

    return arr.map((a,i)=>i).filter(i=>!arr.includes(i));


}
// console.log(findSecondMininm(number));

// console.log(findDublicate(number));
// console.log(findMissingNumber(number));

console.log([] + {},"test ")