function func(s, a, b) {
  if (s.match(/^$/)) {
      return -1;
  }
  
  function foo() {
      let i = s.length -1,
       aIndex = -1,
       bIndex = -1,
       ss = s.substring(i, i +1);
       
      while ((aIndex == -1) && (bIndex == -1) && (i > 0)) {
          if (ss == a) {
            aIndex = i;
          }

          if (ss == b) {
              bIndex = i;
            }

          i -= 1;
  
      }
    
    if (aIndex != -1) {
        return bIndex == -1 ?  aIndex :  Math.max(aIndex, bIndex);
    }

    return bIndex != -1 ?  bIndex :  -1;
   
	}
  
  foo();
}
