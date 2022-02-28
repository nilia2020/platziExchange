import numeral from 'numeral'

const dollarFilter = function(value) {
  if (!value) {
    return '$ 0'
  }
  return numeral(value).format('($0.00a)')
}

const percentFilter = function(value) {
  if (!value) {
    return '0%'
  }
  return numeral(value).format('0.00%')
}

export { dollarFilter, percentFilter }
