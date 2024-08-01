// const loginBtn = document.getElementById('login');
      // loginBtn.addEventListener('click', function(){
      //     console.log("amak click marce");
      // });
      // const logBtn = document.getElementById('login').addEventListener('click', function(){
      //     console.log("jeo o na sathiiii...");
      //     const loginArea = document.getElementById('login-area').style.display ='none';
      //     const transectionArea = document.getElementById('transection-area').style.display ='block';
      // });

      // const addDeposite = document.getElementById('adddeposite');
      // addDeposite.addEventListener('click',function(){
      //     const depositeAmount = document.getElementById('depositeamount').value;
      //     const depositeNumber = parseFloat(depositeamount);

      // });
      // !own practice
      const loginBtn = document.getElementById("login");
      loginBtn.addEventListener("click", function () {
        const loginArea = document.getElementById("login-area");
        loginArea.style.display = "none";
        const transectionArea = document.getElementById("transection-area");
        transectionArea.style.display = "block";
      });
      //    depositae event handler
      const addDeposite = document
        .getElementById("adddeposite")
        .addEventListener("click", function () {
          //convert code
          // const depositeamount = document.getElementById("depositeamount").value;
          // const depositeNumber = parseFloat(depositeamount);
          const depositeNumber = getInputNumber("depositeamount");
          //convert short code
          // const currentDeposite = document.getElementById("currentdeposite").innerText;
          // const currentDepositeNumber = parseFloat(currentDeposite);
          // const totalDeposite = depositeNumber + currentDepositeNumber;
          // console.log(totalDeposite);
          // document.getElementById("currentdeposite").innerText = totalDeposite;

          // const currentBalance = document.getElementById("currentbalance").innerText;
          // const currentBlanceNumber = parseFloat(currentBalance);
          // const totalBlance = depositeNumber + currentBlanceNumber;
          // document.getElementById("currentbalance").innerText = totalBlance;
          //convert short code

          document.getElementById("depositeamount").value = "";
          updateSpanText("currentdeposite", depositeNumber);
          updateSpanText("currentbalance", depositeNumber);
        });

      // !withdraw
      const withdrawBtn = document.getElementById("addwithdraw");
      withdrawBtn.addEventListener("click", function () {
        // console.log("knock korce mamu");
        // copy get input
        // const withdrawAmount = document.getElementById("withdrawAmount").value;
        // const withdrawNumber = parseFloat(withdrawAmount);
        // copy get input
        const withdrawNumber = getInputNumber("withdrawAmount");
        updateSpanText("currentwithdraw", withdrawNumber);
        updateSpanText("currentbalance", -1 * withdrawNumber);
        document.getElementById("withdrawamount").value = "";
      });
      function getInputNumber(id) {
        const Amount = document.getElementById(id).value;
        const amountNumber = parseFloat(Amount);
        return amountNumber;
      }

      function updateSpanText(id, addedNumber) {
        const currentDeposite = document.getElementById(id).innerText;
        const currentNumber = parseFloat(currentDeposite);
        const totalDeposite = addedNumber + currentNumber;
        console.log(totalDeposite);
        document.getElementById(id).innerText = totalDeposite;
      }