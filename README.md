# experiment callbacks, Promises and async/await patterns

To be able to read complex JavaScript and write good chunks of code, being familiar with callbacks, Promises and async/await patterns is primordial.
Here’s an exercise to experiment these notations:

- The HTML file below is a static exemple of the exercise
- The goal is to create 7 services (simple timeout functions)
- Some services have no dependency and can start running from the beginning (#1, #2, #3 and #4)
- Some services have one level of dependencies:
  - Service #5 has to wait #1 and #2 to complete before starting
  - Service #6 has to wait #3 and #4 to complete before starting
- One service has two level of dependencies \* Service #7 has to wait service #5 and #6 to complete before starting
  Todo
- Download the HTML template below
- Remove the static logs: the “Started” and “Ended” logs will be written dynamically by your JavaScript when a service start or end
- Implement the logic described above 3 times:
  - 1st, try with callbacks
  - 2nd, try with Promises
  - 3rd, try with async/await
  - Each solution is technically the same, but the way you write your code can be quite weird at 1st sight
- Use the HTML page as a visual feedback to test your implementation (reload the page multiple times, make sure service #5 start after #1 and #2, etc)
