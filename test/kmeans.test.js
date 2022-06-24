const Kmeans = require("../dist/kmeans");

test('kmeans', () => {
  const data3D = [
    [6, 2.92], [6.7, 3.07], [7.4, 3.22],
    [6.7, 2.93], [9.2, 3.03], [7.4, 3.29],
    [9.3, 3.28], [4.5, 2.72], [6.4, 2.92],
    [8.5, 3.49], [6.9, 3.08], [5.8, 2.83],
    [6.3, 3.18], [6.4, 3.2], [3.9, 3.29],
  ];
  const kmeans = new Kmeans(data3D, 3)
  const result = [
    [4.2, 3.005],
    [6.6, 3.0639999999999996],
    [9, 3.266666666666667]
  ]

  return kmeans.run()
    .then((data) => {
      // check type of data 
      expect(typeof data).toBe('object')
      // check length 
      expect(data.length).toBe(result.length)

      for (let i = 0; i < result.length; i++) {
        const r = result[i];
        let index = -1
        for (let j = 0; j < data.length; j++) {
          const d = data[j];
          if (d[0] === r[0] && d[1] === r[1]) index = j
        }
        if (index !== -1) data.splice(index, 1)
      }

      expect(data.length).toBe(0)
    })
})

