myObject={
	isPrime: function(N){
		return Array.from(Array(N).keys()).filter(key=>(N%key===0)).length===1;
	},
    premierfactorN: function (N){
         return Array.from(Array(N).keys()).filter(key =>(this.isPrime(key) && (N%key===0)));
    },
	factorOfN: function(N){
		
		return Array.from(Array((Math.floor(N/2)+1)).keys()).filter(key =>(N%key===0)).concat([N]);
	}
	
	
}


document.getElementById("mybutton").addEventListener("click",function(){
	console.log(myObject.premierfactorN(85463));
	//console.log(myObject.isPrime(11));
	
});

