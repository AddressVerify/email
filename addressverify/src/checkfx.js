const serverAcceptsEmail = require('server-accepts-email');
const data = require('../../data.js')
const dns = require('dns').promises;
const options = {
    all:true,
}

//test to be run
//test shell function
const verify = function(email, inactiveTests, jobSet){
  const domain = email.split('@')[1];
  //syntax
  function synCheck(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(String(email).toLowerCase())){
      return [true, 'Syntax check passed'];
    }
    return [false, 'Syntax check failed'];
  }

  //dedupe
  function dedupe(email, jobSet){
    let setLength = jobSet.size
    jobSet.add(email);
    if(jobSet.size > setLength){
      return [true, 'Dedupe check passed'];
    }

      return [false, 'Dedupe check failed'];
  }
  // function domainMx(email){
  //   if(await serverAcceptsEmail(email)){
  //     return [true, 'Domain/MX check passed'];
  //   }
  //   return [false, 'Domain/MX check failed'];
  // }
// Rolebased/DEA
function roleBasedDisposable(email){
  for(let i = 0, j = data.deaList.length; i < j; i++) {
    if(email.includes(data.deaList[i])){
      return [false, 'Disposable email address'];
    }
  }
  for(let k = 0, l = data.roleBasedList.length; k < l; k++) {
    if(email.includes(data.roleBasedList[k])){
      return [false, 'Role Based email address'];
    }
  }
  return [true, 'Role based and disposable email check passed!'];
}
// Domain MX check
function dnsmxCheck(domain){
  dns.lookup(domain, options)
    .then((result) => {
      if (!result.address) {
        return [false, 'DNS/MX check failed']
      }
    }).then(() => {
      dns.resolveMx(domain, options)
      .then((result) => {
        console.log('mx results', result);
        if (result.exchange) {
          return [true, 'DNS/MX check passed!']
        }
        return [false, 'DNS/MX Check failed'];
      }).catch((err) => {
        console.log('error', err);
        return [false, 'DNS/MX Check failed'];
      });
    })
    .catch((err) => {
      console.log('error', err);
      return [false, 'DNS/MX check failed']
    });
    
  }
// 5. SMTP Check
// 6. Honeypot/Spam filter
// 7. Checking DNSBLs and URI DNSBL
// inactive tests
function init(){
  
}
}


 let dnsCheck = function(domainName){
  dns.lookup(domainName, options)
    .then((result) => {
      if (!result[0].address) {
        return [false, 'DNS/MX check failed']
      }
    })
    .then(() => {
      dns.resolveMx(domainName, options)
      .then((result) => {
        // console.log('mx results', result);
        if(result[0].exchange) {
          console.log('this is true and returning correctly')
          return [true, 'DNS/MX check passed!']
        }
        return [false, 'DNS/MX Check failed'];
      }).catch((err) => {
        console.log('error', err);
        return [false, 'DNS/MX Check failed'];
      });
    })
    .catch((err) => {
      console.log('error', err);
      return [false, 'DNS/MX check failed']
    });
    
  };


  dnsCheck('gmail.com').then((results) => console.log('test', results));

// console.log(serverAcceptsEmail('linus@folkdatorn.se').then((response) => response).catch((reject) => reject));


