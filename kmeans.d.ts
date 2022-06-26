export type NumberArr = number[]
export type Vector = NumberArr[]

declare class Kmeans {
  constructor(vector: Vector, k: number)
  setCentroidsAndCluster(vector: Vector)
  setVector(vector: Vector)
  run(): Promise<Vector>
}

export default Kmeans