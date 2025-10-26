{
    let r;              // -------+-- 'a starts here
    {                   //        |
        let x = 5;      // ---+-- 'b starts here
        r = x;         //    |   Error! 'b shorter than 'a
    }                   // ---+-- 'b ends here
    console.log(r);
      // Dangling reference if allowed
}                       // -------+-- 'a ends here
