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
                //for the number of commas
                // for (let i = 0; i<commaCount; i++) {
                    let j;
                    //if there are no commas, add one 3 places from end
                    if (totalArr.indexOf(",") > -1){
                        j = totalArr.length - 2;
                    } else {
                        j = totalArr.indexOf(",") - 2;
                    }
                    totalArr.splice(j, 0, ",");
                // }
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
