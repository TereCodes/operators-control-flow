//question 3
let scienceSubjects = "Physics, Chemistry, Biology, Technical Drawing";
let socialScienceSubjects = "Accounting, Commerce, Marketing, Geography";
let artsSubjects = "Government, Economics, Literature, History";
let generalSubjects = "English, Mathematics";
let classGroup = prompt("enter your classgroup");

if (classGroup == "artsSubjects") {
    console.log(artsSubjects + generalSubjects);
}
else if (classGroup == "scienceSubjects") {
    console.log(scienceSubjects + generalSubjects);
}
else if (classGroup == "socialScienceSubjects") {
    console.log(socialScienceSubjects + generalSubjects);
}
else {
    console.log(generalSubjects);
}


//question 4
for (let i = 1; i < 20; i += 7) {
    console.log(i);
}
//The result will be 15

//question 5
function findPower(num) {
    let pwr = 0;

    for (let i = 0; i < num; i++) {
        const tempPwr = 2 ** i;

        if (tempPwr > num) {
            break;
        }

        pwr = tempPwr;
    }

    console.log('The number ' + pwr + ' is the power of 2 nearest to ' + num);
}

