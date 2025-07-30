let students=[]
document.getElementById("submit_btn").addEventListener("click",function(e){
    e.preventDefault()

    let name=document.getElementById("name").value
    let email=document.getElementById("email").value
    let dob=document.getElementById("dob").value
    let phone=document.getElementById("mobile").value

    let gender=document.getElementsByName("gender")
    let gender_v=" "
    for(let gen of gender){
        if(gen.checked){
            gender_v=gen.value
        }
    }
    let selectedsubjects=[]
    let subjects=document.getElementsByName("subjects")
    for(let sub of subjects){
        if(sub.checked){
            selectedsubjects.push(sub.value)
        }
    }

    let student={
        "name": name,
        "email": email,
        "dob": dob,
        "phone": phone,
        "gender": gender_v,
        "subject": selectedsubjects
    }

    students.push(student)

    console.log(students)
})
