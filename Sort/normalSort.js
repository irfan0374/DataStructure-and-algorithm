const people=[
    {name:"Firas",age:30},
    {name:"Irfan",age:29},
    {name:"Amaan",age:36},
    {name:"Mubashir",age:41},
]

const sortedResult=people.sort((a,b)=>{
    return a.age-b.age;
})

console.log(sortedResult)

// another model

const compareObjectSort=(a,b)=>{
return a.age-b.age
}

console.log(people.sort(compareObjectSort))