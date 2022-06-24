class Kmeans {
  constructor(vector, k) {
    if (k > vector.length)
      throw new Error('Required: # of points >= # of clusters');

    this.k = k
    this.setVector(vector)
  }

  randomCentroids(vector, k) {
    const rand = vector.sort(() => Math.floor(Math.random() * vector.length))
    return rand.slice(0, k)
  }

  setCentroidsAndCluster(vector) {
    this.centroids = this.randomCentroids(vector, this.k)
    this.cluster = this.centroids.map(() => vector[0].map(() => 0))
  }

  setVector(vector) {
    this.vector = vector
    this.setCentroidsAndCluster(vector)
  }

  /**
   * distance two array
   * distance(X,Y) = sqrt(sum_i=1:n[(x_i-y_i)^2])
   * 
   * @param {number} x 
   * @param {number} y 
   * @returns {number}
   */
  distance(x, y) {
    if (x.length !== y.length) throw new Error("dimension error")

    let total = 0
    x.forEach((_, i) => {
      total += Math.pow(x[i] - y[i], 2)
    })
    return Math.sqrt(total)
  }

  /**
   * it asign new centroid
   * @param {Array} point 
   * @returns {number}
   */
  assignCentroid(point) {
    let min = Infinity
    let res = 0
    this.centroids.forEach((v, i) => {
      const dist = this.distance(point, v)
      if (dist < min) {
        min = dist
        res = i
      }
    })

    return res
  }

  /**
   * calculate kmenas
   * @returns {Promise}
   */
  run() {
    const newCluster = this.centroids.map(() => [])

    let vecArr = this.centroids.map(() => this.vector[0].map(() => 0))

    this.vector.forEach((v, i) => {
      const res = this.assignCentroid(v)
      newCluster[res].push(i)

      v.forEach((a, j) => {
        vecArr[res][j] += a
      })
    })

    vecArr = vecArr.map((x, i) => {
      const clusterSize = newCluster[i] ? newCluster[i].length : 0

      // referensi https://www.baeldung.com/java-k-means-clustering-algorithm
      // when cluster size is empty , return centroid
      if (!clusterSize) return x
      // return x.map(y => Math.floor(y / clusterSize))
      return x.map(y => y / clusterSize)
    })

    if (this.isEqual(this.cluster, newCluster)) {
      return new Promise((resolve) => {
        resolve(vecArr)
      })
    }

    this.cluster = newCluster
    this.centroids = vecArr
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.run())
      })
    })
  }

  /**
   * equal cluster
   * 
   * @param {Array} oldCluster 
   * @param {Array} newCluster 
   * @returns {boolean}
   */
  isEqual(oldCluster, newCluster) {
    for (let i = 0; i < this.k; i++) {
      const tmpOld = oldCluster[i]
      const tmpNew = newCluster[i]

      if (tmpOld.length !== tmpNew.length) return false

      for (let j = 0; j < tmpOld.length; j++) {
        if (tmpOld[j] !== tmpNew[j]) return false
      }
    }

    return true
  }
}

export default Kmeans
