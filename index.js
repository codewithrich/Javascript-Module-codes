var filter = (arr, fn) =>{
    var ans=[];
    for (i=0; i<arr.length ; i++) {
        if (fn(arr[i] , i)) {
            ans.push(arr[i]);
        }
    }
  return ans;  
};
