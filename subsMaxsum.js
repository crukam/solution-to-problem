var myObject= {
	
	maxset:function (A){
             var i=0,j=0,start_index=0,end_index=0;
	        var temp_sum=0,max_sum=0;
	        var res=[];
	        if(A.length===1)return A;
	        //go through the array looking for a negative item
	    while(j<A.length){
	           while(j<A.length && A[j]>=0){
		           temp_sum+=A[j];
		           j++;
		        }
			   if(temp_sum>max_sum){
			     	start_index=i;
				    end_index=j-1;
				    max_sum=temp_sum;
			    }
			   if(temp_sum===max_sum){
			    	if(end_index-start_index<j-i){
				    	start_index=i;
				        end_index=j-1;
				    }
			    }
			    i=j+1;
			    j++;
	        }
	        if(temp_sum<max_sum){
	     	    for(var k=start_index;k<=end_index;k++){
		        	res.push(A[k]);
	           }
	        }
	       if(temp_sum>max_sum){
	    	   for(var k=i;k<j;k++){
	     		res.push(A[k]);
		       }
	        }
	return res;
	},
	
     
};

 var A : [ 1, 2, 5, -7, 2, 5 ];
document.getElementById('mybutton').addEventListener('click',function(){
	myObject.maxset();
});

