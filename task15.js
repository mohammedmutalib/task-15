function longestIncreasingSubsequence(arr) {
    const n = arr.length;
    const dp = new Array(n).fill(1);
  
    for (let i = 1; i < n; i++) {
      for (let j = 0; j < i; j++) {
        if (arr[i] > arr[j] && dp[i] < dp[j] + 1) {
          dp[i] = dp[j] + 1;
        }
      }
    }
  
    return Math.max(...dp);
  }
  
  // Test case
  const input = [10, 22, 9, 33, 21, 50, 41, 60, 80];
  console.log(longestIncreasingSubsequence(input)); // Output: 6
  