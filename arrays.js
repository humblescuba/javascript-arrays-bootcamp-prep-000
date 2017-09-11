var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]

function addElementToBeginningOfArray(array, element) {
  return ['foo', ...[1]];
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array = array.unshift('foo');
  return array;
}