# K-Means
[![Latest Release](https://img.shields.io/github/v/release/ridwan-p/kmeans.svg)](https://github.com/ridwan-p/kmeans/releases)
[![npm version](https://badge.fury.io/js/@ridwan-p%2Fkmeans.svg)](https://badge.fury.io/js/@ridwan-p%2Fkmeans)

K-Means clustering algorithm implementation written in javascript

```console
npm i @ridwan-p/kmeans
```


```js
const data = [
    [6, 2.92], [6.7, 3.07], [7.4, 3.22],
    [6.7, 2.93], [9.2, 3.03], [7.4, 3.29],
    [9.3, 3.28], [4.5, 2.72], [6.4, 2.92],
    [8.5, 3.49], [6.9, 3.08], [5.8, 2.83],
    [6.3, 3.18], [6.4, 3.2], [3.9, 3.29],
  ];
  
const kmeans = new Kmeans(data3D, 3)
// calculate
kmeans.run()
  .then( res => { console.log('result', res) } )
```
