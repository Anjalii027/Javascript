let students=new Array()
function insert(name){
    if(students.length>=10){
        console.log("Array is full")
    }
    else{
        students.push(name)
        console.log(students)
    }
}

function del(){
    if(students.length==0){
        console.log("Array is empty")
    }
    else{
        students.shift()
        console.log(students)
    }
}

function search(name){
    if(students.includes(name)){
        console.log(name +"is present at "+(students.indexOf(name)))
    }
    else(
        console.log("not found")
    )
}

insert("Prachi")
insert("Aditi")
insert("Raj")
insert("Vishnu")
insert("Suman")
insert("Jiya")
insert("Harsh")
insert("Megha")
insert("Vinay")
insert("Zade")
insert("dia")

students.sort()
console.log(students)

search("Suman")
search("Anjali")

del()
del()
del()
del()
del()
del()
del()
del()
del()
del()
del()


