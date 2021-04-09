$(document).ready(function(){
    let numberStr;

    const doCount = (element) => {
        // COUNTER
        let start // set on the first step to the timestamp provided

        const finalNum = parseInt(element.innerHTML, 10) // parse out the final number
        //console.log(finalNum);
        const duration = 1000 // duration in ms
        const step = ts => {
            if (!start) {
                start = ts
            }
            // get the time passed as a fraction of total duration
            let progress = (ts - start) / duration 

            element.textContent = Math.floor(progress * finalNum) // set the text
            if (progress < 1) {
                // if we're not 100% complete, request another animation frame
                requestAnimationFrame(step) 
                // console.log(finalNum)
            } else {
                el.textContent = finalNum;
                // console.log(finalNum)
            }
        }
        // start the animation
        requestAnimationFrame(step);
    }

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
        let perc;
        if(((number/goal) * 100) > 100) {
            perc = 100;
        } else {
            perc = (number/goal) * 100;
        }
        return parseInt(perc);
    }

    const getData = () => {
        $.ajax({
                url: "https://callingalldawgs.uga.edu/UGAData.json",
                dataType: 'json',
                type: 'GET',
            }).then((response) => {
                //console.log(response);
                let total = parseInt(response.TotalGiftAmount);
                let newDonorAmountLeft = noNeg(parseInt(response.NewDonorCappedGiftAmount));
                let youngDonorAmountLeft = noNeg(parseInt(response.GOLDCappedGiftAmount))

                let newDonorPercent = percent(35000, parseInt(response.NewDonorCappedGiftAmount));
                let youngDonorPercent = percent(35000, parseInt(response.GOLDCappedGiftAmount));
                let deiDonorPercent = percent(250, parseInt(response.DEIDonorCnt));

                //add commas
                addCommas(total);
                addCommas(newDonorAmountLeft);

                //print to DOM
                document.getElementById("totalGiftAmt").innerHTML = "$" + addCommas(total);
                document.getElementById("newDonorAmtLeft").innerHTML = "$" + addCommas(newDonorAmountLeft);
                document.getElementById("youngDonorAmtLeft").innerHTML = "$" + addCommas(youngDonorAmountLeft);
                document.getElementById("newDonorCnt").innerHTML = response.NewDonorCnt;
                document.getElementById("youngDonorCnt").innerHTML = response.GOLDDonorCnt;
                document.getElementById("deiDonorCnt").innerHTML = response.DEIDonorCnt;
                
                document.getElementById("newDonorPercent").innerHTML = newDonorPercent + "%";
                document.getElementById("progress01").style.width = newDonorPercent + "%";
                document.getElementById("youngDonorPercent").innerHTML = youngDonorPercent + "%";
                document.getElementById("progress02").style.width = youngDonorPercent + "%";
                document.getElementById("progress03").style.width = deiDonorPercent + "%";
                document.getElementById("deiTotalGiftAmt").innerHTML = "$" + addCommas(parseInt(response.DEITotalGiftAmount));

                //add overlay if reached goal
                let progressArr = [document.getElementById("progress01"), document.getElementById("progress02"), document.getElementById("progress03")];
                progressArr.forEach(bar => {
                    if(bar.style.width == "100%") {
                        bar.closest('.challenge').style.opacity = ".75";
                        bar.closest('.challenge').style.backgroundColor = "#303030";
                    }
                })
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
})
