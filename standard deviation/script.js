let sd = (avg = n = sum = div = 0);

const arr = [];

n = Number(prompt("n=?"));

for (let i = 0; i < n; i++) {
  arr[i] = Number(prompt(`x[${i}]`));
  avg += arr[i];
}

avg = avg / n;

for (let i = 0; i < n; i++) {
  sum += Math.pow(arr[i] - avg, 2);
}

div = sum / n;
sd = Math.sqrt(div);

console.log(sd);
