const serverAcceptsEmail = require('server-accepts-email');

//test to be run
const verify = function(email, activeTests, jobSet){
  // 1. syntax
  function syncheck(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(String(email).toLowerCase())){
      return [true, 'Syntax check passed'];
    }
    return [false, 'Syntax check failed'];
  }
  // 2. dedupe
  function dedupe(email, jobSet){
    let setLength = jobSet.size
    jobSet.add(email);
    if(jobSet.size > setLength){
      return [true, 'Dedupe check passed'];
    }

      return [false, 'Dedupe check failed'];
  }
  // 3. Domain MX check
  // function domainMx(email){
  //   if(await serverAcceptsEmail(email)){
  //     return [true, 'Domain/MX check passed'];
  //   }
  //   return [false, 'Domain/MX check failed'];
  // }
// 4. Rolebased/DEA
  function roleBasedDisposable(email){

  }
// 5. SMTP Check
// 6. Honeypot/Spam filter
// 7. Checking DNSBLs and URI DNSBL
}

console.log(serverAcceptsEmail('linus@folkdatorn.se').then((response) => response).catch((reject) => reject));


