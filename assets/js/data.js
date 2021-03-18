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
}

const getData = () => {
    $.ajax({
            url: "https://dev.dar.uga.edu/alumni/cad/test.json",
            dataType: 'json',
            type: 'GET',
        }).then((response) => {
            //console.log(response);
            let total = parseInt(response.TotalGiftAmount);

            addCommas(total);

            document.getElementById("totalGiftAmt").innerHTML = "$" + numberStr + " Raised";
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
