function bubbleSort(nums) {
  let swapped = false;

  do {
    swapped = false;

    for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i] > nums[i + 1]) {
        const temp = nums[i];
        nums[i] = nums[i + 1];
        nums[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);

  return nums;
}

test("bubbleSort", function () {
  const nums = [4, 2, 1, 3, 11];
  const sortedArray = bubbleSort(nums);
  expect(sortedArray).toEqual([1, 2, 3, 4, 11]);
});
