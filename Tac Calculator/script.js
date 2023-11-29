function cv() {
    let base_salary = parseInt(document.getElementById("base_salary").value);
    let hra = parseInt(document.getElementById("hra").value);
    let oa = parseInt(document.getElementById("oa").value);

    hra = ((base_salary * (hra / 100)));
    oa = ((base_salary * (oa / 100)));

    let net_salary = base_salary + hra + oa;

    let tax_rate = 100;

    if (net_salary > 250000 && net_salary < 500000) {
        tax_rate = 5;
    } else if (net_salary > 500000 && net_salary < 750000) {
        tax_rate = 10;
    } else if (net_salary > 750000 && net_salary < 1000000) {
        tax_rate = 15;
    } else if (net_salary > 1000000 && net_salary < 1250000) {
        tax_rate = 20;
    } else if (net_salary > 1250000 && net_salary < 1500000) {
        tax_rate = 25;
    } else if (net_salary > 1500000) {
        tax_rate = 30;
    } else {
        tax_rate = 0;
    }

    let tax = (net_salary * (tax_rate / 100));
    let final_salary = net_salary - tax;

    if (tax != 0) {
        document.getElementById("p2").innerHTML=(`Your Salary would be Rs ${final_salary} after Tax!!`);
        if (document.getElementById("p3").style.display == 'none'){
            document.getElementById("p3").style.display = 'block';  
        }
        document.getElementById("p3").innerHTML=(`Hra: ${hra}`);
        
    } else {
        document.getElementById("p2").innerHTML=("Your Salary is in Tax Free Range! = " + final_salary);
        if (document.getElementById("p3").style.display != 'none'){
            document.getElementById("p3").style.display = 'none';
        }
    }
}