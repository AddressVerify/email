//test to be run
const verify = function(email, activeTests, jobSet){
  // 1. syntax
  function syncheck(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  // 2. dedupe
  function dedupe(email, jobSet){
    let setLength = jobSet.size
    jobSet.add(email);
    if(jobSet.size > setLength){
      return true;
    }
      return false;
  }
  // 3. Domain MX check
  
// 4. Rolebased/DEA
// 5. SMTP Check
// 6. Honeypot/Spam filter
// 7. Checking DNSBLs and URI DNSBL
}

