// const dns = require('dns').promises;
const options = {
    all:true,
}

var dns = require('dns'),
    net = require('net'),
    os = require('os');

const checker = function(email, callback, timeout, from_email) {
	timeout = timeout || 5000;
	from_email = from_email || email;
	if (!/^\S+@\S+$/.test(email)) {
		callback(false,'Bad mail format');
		return;
	}
	dns.resolveMx(email.split('@')[1], function(err, addresses){
		if (err || addresses.length === 0) {
			callback(false,err);
			return;
		}
		var conn = net.createConnection(25, addresses[0].exchange);
		var commands = [ "helo " + addresses[0].exchange, "mail from: <"+from_email+">", "rcpt to: <"+email+">" ];
		var i = 0;
		conn.setEncoding('ascii');
		conn.setTimeout(timeout);

		conn.on('error', function(err) {
			conn.emit('false',err);
		});
		conn.on('false', function (data) {
			callback(false,data);
			conn.end();
		});
		conn.on('connect', function() {
			conn.on('prompt', function (data) {
				if(i < 3){
					conn.write(commands[i]);
					conn.write('\r\n');
					i++;
				} else {
					callback(true,data);
					conn.end();
					conn.destroy(); //destroy socket manually
				}
			});
			conn.on('undetermined', function (data) {
				//in case of an unrecognisable response tell the callback we're not sure
				callback(false, data);
				conn.end();
				conn.destroy(); //destroy socket manually
			});
			conn.on('timeout', function () {
				// conn.emit('undetermined');
                callback(false, 'Timeout');
                conn.end();
                conn.destroy();
			});
            conn.on('data', function(data) {
                if(data.indexOf("220") == 0 || data.indexOf("250") == 0 || data.indexOf("\n220") != -1 || data.indexOf("\n250") != -1) {
                    conn.emit('prompt',data);
                } else if(data.indexOf("\n550") != -1 || data.indexOf("550") == 0) {
                    conn.emit('false',data);
                } else {
                    conn.emit('undetermined',data);
                }
            });
		});
	});
};




checker('blahblah@gmail.com', (err, data) => {
	if(err){
		console.log(err)
	} else {
		console.log(data);
	}
}, 1000, 'milessobhani@gmail.com')















// dns.lookup('1231232fawefoijoijoijoij.csdff.jwowfjiej', options)
// .then((result) => {
//     console.log('dns results', result);
//   }).catch((err) => {
//       console.log('dns error', err);
//   });

// dns.resolveMx('gmail.com', options)
// .then((result) => {
//     console.log('mx results', result);
// }).catch((err) => {
//     console.log('error', err);
// });


// dns.resolveMx('reddit.com', options)
// .then((result) => {
//    console.log('mx results', result);
//     if(result.exchange){
//       return [true, 'MX check passed!']
//     }
//     return [false, 'MX Check failed'];
// }).catch((err) => {
//     console.log('error', err);
// });