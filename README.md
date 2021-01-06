# This DoS Goes Loop-di-Loop

A repo with the demos and benchmarks from my
[FOSDEM 2021](https://fosdem.org/2021/) talk This Loop Goes
Loop-di-Loop.

## Recordings
Will be published after FOSDEM.


## Slides
Will be published after FOSDEM.


## Warning

These demos contain intentionally vulnerable code.

Do not run any of them on a machine which can be accessed by external
users.


## Installation

Clone the repository:
```
git clone https://github.com/mureinik/owasp-top10-demo.git
```

Install the dependencies:
```
npm install
```


## Usage
- lib: Contains the demos. Each of these files is a standalone mini
  application that can be run with
  ```
  node <filename>
  ```

  Once run, the application will be available at http://localhost:3000.

- benchmark: Contains scripts to benchmark the issues demonstrated in
  the talk. Each of these scripts can be run independently and will
  dump a CSV result to the standard output. It's recommended to redirect
  the output to a file:
  ```
  node <filename> > /tmp/benchmark.csv
  ```
