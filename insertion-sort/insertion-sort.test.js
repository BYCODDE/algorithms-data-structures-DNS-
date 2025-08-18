function inserionSort(nums) {
  for (let i = 1; i < nums.length; i++) {
    let temp = nums[i];
    let j;

    for (j = i - 1; nums[j] > temp && j >= 0; j--) {
      nums[j + 1] = nums[j];
    }
    nums[j + 1] = temp;
  }
  return nums;
}

test("insertion sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  inserionSort(nums);
  expect(nums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
