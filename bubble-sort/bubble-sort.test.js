function bubbleSort(nums) {
  
}


test('bubbleSort', function () {

  const nums = [4, 2, 1, 3];
  const sortedArray = bubbleSort(nums);
  expect(sortedArray).toEqual([1, 2, 3, 4]);
})