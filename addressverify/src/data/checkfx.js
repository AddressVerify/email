const serverAcceptsEmail = require('server-accepts-email');
const data = require('./data')
const dns = require('dns').promises;
const options = {
    all: true,
  }

//test to be run
//test shell function
const verify = function (email, inactiveTests, jobSet) {

  let verdict;
  //syntax
  const synCheck = function (email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(String(email).toLowerCase())) {
      return [true, 'Syntax check passed'];
    }
    return [false, 'Syntax check failed'];
  }

  //dedupe
  const dedupe = function (email) {
    let setLength = jobSet.size
    jobSet.add(email);
    if (jobSet.size > setLength) {
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
  const roleBasedDisposable = function (email) {
    for (let i = 0, j = data.deaList.length; i < j; i++) {
      if (email.includes(data.deaList[i])) {
        return [false, 'Disposable email address'];
      }
    }
    for (let k = 0, l = data.roleBasedList.length; k < l; k++) {
      if (email.includes(data.roleBasedList[k])) {
        return [false, 'Role Based email address'];
      }
    }
    return [true, 'Role based and disposable email check passed!'];
  }
  // Domain MX check
  const dnsCheck = function (email) {
    let domain = email.split('@')[1];
    let final = dns.lookup(domain, options)
      .then((result) => {
        if (!result[0].address) {
          return [false, 'DNS check failed']
        }
      })
      .then(() => {
        return dns.resolveMx(domain, options)
          .then((result) => {
            // console.log('mx results', result);
            if (result[0].exchange) {
              // console.log('passed!', result);
              return [true, 'DNS/MX check passed!']
            } else {
              return [false, 'DNS Check failed'];
            }
          })
          .catch((err) => {
            // console.log('MX check failed', err);
            return [false, 'MX check failed'];
          });
      })
      .catch((err) => {
        // console.log('DNS check failed', err);
        return [false, 'DNS check failed'];
      });
    return final;
  }
  // 5. SMTP Check
  // 6. Honeypot/Spam filter
  // 7. Checking DNSBLs and URI DNSBL
  // inactive tests

  const functionArr = [synCheck, dedupe, roleBasedDisposable, dnsCheck];
  async function init() {
    for (let i = 0; i < functionArr.length; i++) {
      if (inactiveTests.includes(i)) {
        continue;
      } else {
        const temp = await functionArr[i](email)
        // console.log(typeof temp);
        if (!temp[0]) {
          verdict = temp
          verdict.unshift(email);
          break;
        }
      }
      verdict = [email, true, 'email valid!'];
    }
    return verdict;
  }
  return init()
}

module.exports = {
  verify:verify
}

// console.log(serverAcceptsEmail('linus@folkdatorn.se').then((response) => response).catch((reject) => reject));