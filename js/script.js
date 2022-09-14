
function sub (date){
    return(2022 - date)
}

function calcAge (){
    let personName = document.getElementById("person-name").value
    let birthYear = document.getElementById("birth-year").value
    let age = sub(parseInt(birthYear))
    let generazione;
    console.log(age)

    if ( birthYear > 1946 && birthYear < 1960 || birthYear > 1981 && birthYear < 1995 ) {
        generazione = 'baby boomer o millennial'
    } 
    else {
        generazione = 'Gen X o Gen Z'
    }
    console.log(generazione)
    document.getElementById("answer").innerHTML = `Ciao ${personName}, hai ${age} anni e fai parte della generazione ${generazione}`
}

