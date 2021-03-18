let numberStr;

const addCommas = number => {
    //make arr of total
    numberStr = number.toString();
    let numberArr = numberStr.split("");
    //add ,'s
    if (numberArr.length > 3){
        //comma count = number of times arr length divisible by 3
        let commaCount = numberArr.length/3;
        let lastComma = numberArr.length - 3;
        //place last comma
        numberArr.splice(lastComma, 0, ",");
        //place rest of commas
        while (numberArr.indexOf(",") > 3){
            let j = numberArr.indexOf(",") - 3;
            numberArr.splice(j, 0, ",");
        }
    }
    numberStr = numberArr.join("");
    return numberStr;
}

const noNeg = (number) => {
    let amtLeft;
    if (35000 - number >= 0) {
        amtLeft = 35000 - number;
    } else {
        amtLeft = 0;
    }
    return amtLeft;
}

const percent = (goal, number) => {
    let perc = (number/goal) * 100;
    return parseInt(perc);
}

const getData = () => {
    $.ajax({
            url: "https://dev.dar.uga.edu/alumni/cad/test.json",
            dataType: 'json',
            type: 'GET',
        }).then((response) => {
            //console.log(response);
            let total = parseInt(response.TotalGiftAmount);
            let newDonorAmountLeft = noNeg(parseInt(response.NewDonorCappedGiftAmount));
            let youngDonorAmountLeft = noNeg(parseInt(response.GOLDCappedGiftAmount))

            let newDonorPercent = percent(35000, parseInt(response.NewDonorCappedGiftAmount));
            let youngDonorPercent = percent(35000, parseInt(response.GOLDCappedGiftAmount));

            //add commas
            addCommas(total);
            addCommas(newDonorAmountLeft);

            //print to DOM
            document.getElementById("totalGiftAmt").innerHTML = "$" + addCommas(total); + " Raised";
            document.getElementById("newDonorAmtLeft").innerHTML = "$" + addCommas(newDonorAmountLeft);
            document.getElementById("youngDonorAmtLeft").innerHTML = "$" + addCommas(youngDonorAmountLeft);
            
            document.getElementById("newDonorPercent").innerHTML = newDonorPercent + "%";
            document.getElementById("progress01").style.width = newDonorPercent + "%";
            document.getElementById("youngDonorPercent").innerHTML = youngDonorPercent + "%";
            document.getElementById("progress02").style.width = youngDonorPercent + "%";
            
        })
}

getData();

//totalGiftAmt

// newDonorAmtLeft
// newDonorPercent
// newDonorCnt

// youngDonorAmtLeft
// youngDonorPercent
// youngDonorCnt

// deiGoal
// deiDonorCnt
// deiTotalGiftAmt
