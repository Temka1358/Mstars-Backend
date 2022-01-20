

now = new Date()
day  = new Date().getUTCDay();
month = new Date().getUTCDay() + 1;

yearEnd = new Date(2022,12,31,23,59,59)

console.log((yearEnd - now)/ (3600 * 24));
