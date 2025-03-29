function validateForm() {
    const name=document.getElementById("name").value;
    const mascot=document.getElementById("mascot").value;
    const imageCaption=document.getElementById("imgCaption").value;
    const personal=document.getElementById("personal").value;
    const profession=document.getElementById("profession").value;
    const academic=document.getElementById("academic").value;
    const web=document.getElementById("web").value;
    const platform=document.getElementById("platform").value;
    const courses=document.getElementById("courses");
    const addCourseButton=document.getElementById("addCourseButton");
    const deleteCourseButton=document.getElementById("deleteCourseButton");
    const agree=document.getElementById("agree");
    if(name==""){
        alert("Enter your name");
        return false;
    }
    if(mascot=""){
        alert("Enter your mascot");
        return false;
    }
    if(imageCaption=""){
        alert("Enter a caption");
        return false;
    }
    if(personal=""){
        alert("Enter your personal background");
        return false;
    }
    if(profession=""){
        alert("Enter your professional background");
        return false;
    }
    if(academic=""){
        alert("Enter your academic background");
        return false;
    }
    if(web=""){
        alert("Enter your background in web development");
        return false;
    }
    if (platform=""){
        alert("Enter your primary computer platform");
        return false;
    }
    addCourseButton.addEventListener('click',()=>{
        const newCourse=document.createElement('div');
        newCourse.classList.add('course');
        newCourse.textContent="New Course";
        courses.appendChild(newCourse);
    });
    deleteCourseButton.addEventListener('click',()=>{
        const lastCourse=courses.lastElementChild;
        if(lastCourse){
            lastCourse.remove();
        }
    })
    agree.addEventListener('change',function(){
        if(agree.checked){
            console.log("Checkbox is checked.")
            return true;
        }
        else{
            console.log("Please click the checkbox.")
            return false;
        }
    })
}
function loadImage(){
    var image=document.getElementById("image").files[e];
    const imageUrl=URL.createObjectURL(image);
    var text="<img src=\"" + imageUrl + "\"+>";
    document.getElementById("image").innerHTML=text;
}
