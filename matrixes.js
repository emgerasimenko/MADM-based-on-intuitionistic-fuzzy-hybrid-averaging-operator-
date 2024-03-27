const INTUITIONISTIC_FUZZY_DM = [
  [[0.3, 0.5], [0.6, 0.1], [0.3, 0.4], [0.8, 0.1], [0.1, 0.6], [0.5, 0.4]],
  [[0.6, 0.3], [0.5, 0.2], [0.1, 0.6], [0.7, 0.1], [0.3, 0.6], [0.4, 0.3]],
  [[0.4, 0.4], [0.8, 0.1], [0.1, 0.5], [0.6, 0.2], [0.4, 0.5], [0.3, 0.2]],
  [[0.2, 0.4], [0.4, 0.1], [0.0, 0.9], [0.8, 0.1], [0.2, 0.5], [0.7, 0.1]],
  [[0.5, 0.2], [0.3, 0.6], [0.3, 0.6], [0.7, 0.1], [0.6, 0.2], [0.5, 0.3]],
]

// we change columns values order as they are negative
// const INTUITIONISTIC_FUZZY_DM_FINAL = [
//   [[0.4, 0.5], [0.7, 0.2], [0.3, 0.5], [0.1, 0.6], [0.2, 0.5], [0.4, 0.2], [0.8, 0.1]],
//   [[0.6, 0.3], [0.4, 0.3], [0.7, 0.1], [0.8, 0.1], [0.2, 0.5], [0.3, 0.2], [0.5, 0.3]],
//   [[0.3, 0.5], [0.6, 0.3], [0.7, 0.1], [0.2, 0.5], [0.7, 0.1], [0.5, 0.2], [0.6, 0.2]],
//   [[0.9, 0.0], [0.6, 0.1], [0.5, 0.3], [0.3, 0.4], [0.1, 0.6], [0.4, 0.5], [0.7, 0.2]],
//   [[0.5, 0.3], [0.8, 0.1], [0.1, 0.4], [0.6, 0.2], [0.7, 0.1], [0.4, 0.3], [0.6, 0.2]],
// ]
const INTUITIONISTIC_FUZZY_DM_FINAL = [
  [[0.5, 0.4], [0.2, 0.7], [0.5, 0.3], [0.1, 0.6], [0.2, 0.5], [0.4, 0.2], [0.1, 0.8]],
  [[0.3, 0.6], [0.3, 0.4], [0.1, 0.7], [0.8, 0.1], [0.2, 0.5], [0.3, 0.2], [0.3, 0.5]],
  [[0.5, 0.3], [0.3, 0.6], [0.1, 0.7], [0.2, 0.5], [0.7, 0.1], [0.5, 0.2], [0.2, 0.6]],
  [[0.0, 0.9], [0.1, 0.6], [0.3, 0.5], [0.3, 0.4], [0.1, 0.6], [0.4, 0.5], [0.2, 0.7]],
  [[0.3, 0.5], [0.1, 0.8], [0.4, 0.1], [0.6, 0.2], [0.7, 0.1], [0.4, 0.3], [0.2, 0.6]],
]

const W_IFNS = [0.20, 0.19, 0.13, 0.13, 0.11, 0.14, 0.10]

const W_IFHA_OPERATOR = [0.070, 0.131, 0.191, 0.216, 0.191, 0.131, 0.070]

module.exports = {
  INTUITIONISTIC_FUZZY_DM,
  INTUITIONISTIC_FUZZY_DM_FINAL,
  W_IFNS,
  W_IFHA_OPERATOR,
}