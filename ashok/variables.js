var EmailId = "Ashok@cloud-rank.com"
EmailId = "kohali@cloud-rank.com" // here we change EmailId here it allow me for change
//console.log(EmailId);


const accountId = 2345

//accountId = 43  // if we change accountId here , const variable not allowed {TypeError: Assignment to constant variable.}

//console.log(accountId);


let NameId = "Ashok"
NameId = "Kumar"  // here we also change NameId 
//console.log(NameId);

State = "Rajasthan"

State ="Uttar Pradesh" // if change here state is allowed for change 
//console.log(State);

let youCity; // if we declare only variable not assign any value 

console.table([EmailId,accountId,NameId,State,youCity]); // for output show in table
