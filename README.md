# This DoS Goes Loop-di-Loop

A repo with the demos and benchmarks from my talk This Loop Goes Loop-di-Loop.


## Warning

These demos contain **intentionally vulnerable code**.

Do not run any of them on a machine which can be accessed by external  users.


## Installation

Clone the repository:
```
git clone https://github.com/mureinik/loop-di-loop.git
```

Install the dependencies:
```
npm install
```


## Usage
- `lib`: Contains the demos. Each of these files is a standalone mini-application that can be run independently:

  - JSON example:
    ```
    node demo-json.js
    ```

    Then hit the endpoint with a POST request:
    ```
    curl -X POST -H "Content-Type: application/json" -d '{"key1": "value1", "key2": "value2"}' http://localhost:3000/json
    ```

   - XML example:
    ```
    node demo-json.js
    ```

    Then hit the endpoint with a POST request:
    ```
    curl -X POST -H "Content-Type: application/xml" -d '<xml><child/></xml>' http://localhost:3000/xml
    ```

  - ReDoS example:
    ```
    node demo-redos.js
    ```

    Then hit the endpoint with a GET request:
    ```
    curl http://localhost:3000/regexp?regexp=a%2B&text=aaaa
    ```

- `benchmark`: Contains scripts to benchmark the issues demonstrated in the talk. Each of these scripts can be run 
  independently and will dump a CSV result to the standard output. It's recommended to redirect the output to a file:
  ```
  node <filename> > /tmp/benchmark.csv
  ```
