const getData = () => {
    $.ajax({
            url: "https://dev.dar.uga.edu/alumni/cad/test.json",
            dataType: 'json',
            type: 'GET',
        }).then((response) => {
            //console.log(response);
            let total = parseInt(response.TotalGiftAmount);
            //make arr of total
            let totalStr = total.toString();
            let totalArr = totalStr.split("");
            //add ,'s
            if (totalArr.length > 3){
                //comma count = number of times arr length divisible by 3
                let commaCount = totalArr.length/3;
                let lastComma = totalArr.length - 3;
                //place last comma
                totalArr.splice(lastComma, 0, ",");
                //place rest of commas
                while (totalArr.indexOf(",") > 3){
                    let j = totalArr.indexOf(",") - 3;
                    totalArr.splice(j, 0, ",");
                }
            }
            totalStr = totalArr.join("");
            document.getElementById("totalGiftAmt").innerHTML = "$" + totalStr + " Raised";
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
