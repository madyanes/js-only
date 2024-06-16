/**
 * What is Debouncing?
 *
 * Debouncing is a technique to limit the rate at which a function is executed.
 * When multiple events are triggered in quick succession,
 * the debounce function will ensure that only the last event in the series triggers the function execution after a specified delay.
 */

/**
 * Why Use Debouncing?
 *
 * => Performance Optimization: Prevents performance issues by reducing the number of times a function is called.
 * => Enhanced User Experience: Avoids the clutter of repeated actions, providing a smoother experience.
 * => Network Efficiency: Reduces unnecessary network requests when used with event handlers like input fields for live search.
 */

/**
 * How Debouncing Works
 *
 * Imagine a user typing in a search box that triggers an API call for each keystroke.
 * Without debouncing, each keystroke would result in a new API call, flooding the network with requests.
 * With debouncing, only the final input after the user stops typing for a specified duration will trigger the API call.
 */

export default function debounce(func, wait) {
  let timeout

  return function executedFunction(...args) {
    // dalam contoh kasus pada file 'debouncingExample.html',
    // args akan menerima argumen dari method addEventListener.
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }

    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Reference: https://dev.to/dipakahirav/understanding-debouncing-in-javascript-5g30?ref=dailydev
