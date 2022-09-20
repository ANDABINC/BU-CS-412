
const rev = s =>{
    let hold= "";
    if (s.length > 1){
        let midpoint = Math.floor(s.length/2);
        let ll = s.slice(0,midpoint);
        let rr = s.slice (midpoint, s.length);


        ll = rev(ll);
        rr = rev(rr);


        let i= 0;
        let j=0;

        while (i < ll.length && j < rr.length){
            if (ll.charAt(i) <= rr.charAt(j)) {
                hold = hold.concat(ll.charAt(i));
                i++;
            } else{
                hold = hold.concat(rr.charAt(j));
                j++;
            }
        }
        if (i< ll.length){
            hold = hold.concat(ll.slice(i,ll.length));
        }
        if (j < rr.length){
            hold = hold.concat(rr.slice(j,rr.length))
        }
    }
    else{
        return s;
    }
    return hold;

}




const rev_alpha = s => {
    let s_hold = "";
    let s_lower = s.toLowerCase();
    let count=0
    while (count < s.length) {
        let char_hold = s_lower.charAt(count)
        if ('a' <= char_hold && char_hold <= 'z'){
            s_hold = s_hold.concat(char_hold);
        }
        count++;
    }

    s_hold = rev(s_hold);
    s_hold = s_hold.split("");
    s_hold = s_hold.reverse();
    s_hold= s_hold.join("");
    return s_hold;
}

console.log('supercalifragilisticexpialidocious = ' + rev_alpha('supercalifragilisticexpialidocious'));
