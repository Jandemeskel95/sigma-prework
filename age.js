const ageCal = (date) =>
{
    
    let today = new Date()
    let birthDate = new Date(date)
    let age = 0;

    let currentDay = today.getDate();
    let currentMonth = today.getMonth() + 1;
    let currentYear = today.getFullYear();
    
    
    let birthDay = birthDate.getDay();
    let birthMonth = birthDate.getMonth() + 1;
    let birthYear = birthDate.getFullYear();


    if (birthDay > currentDay && birthMonth > currentMonth)
    {
        age = (currentYear - birthYear);
    }
    else
    {
        age = currentYear - birthYear - 1;
    }

    console.log(age)

    return age

}


ageCal("1990-01-01");
ageCal("1972-12-04");



// if current month & day both less than input date then:
// current year - input year - 1 = age
// else
// current year - input year = age
// todays date - 2022 - 05 - 31