module.exports= {
	
	maxset:function (A){
             var sum = 0,
            maxSum = 0,
            temp = [],
            res = [];
        for(var i = 0; i < A.length; i++) {
            if (A[i] < 0) {
                
                if (sum > maxSum) {
                    res = temp.slice();
                    maxSum = sum;
                }
                if (sum === maxSum) {
                    if (res.length < temp.length) {
                        res = temp.slice();
                    }
                }
                temp = [];
                sum = 0;
                // console.log(i, temp);
            } else {
                sum += A[i];
                temp.push(A[i]);
                // console.log(i, temp);
            }
        }
        // console.log(sum, maxSum);
        return (sum > maxSum) ? temp: res;
     
};



 var A : [ 1, 2, 5, -7, 2, 5 ];
/*document.getElementById('mybutton').addEventListener('click',function(){
	myObject.maxset();
});*/

