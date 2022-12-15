# ShowClix Interview Puzzle

Your younger sister is putting on a puppet show in your family's back yard. She has left you in charge of ticketing the big event. She has informed you that she wants assigned seating. She plans on setting up 33 seats; 3 rows with 11 seats each. She already has several seats reserved for her parents and best friends. Being a good computer scientist, you decide to whip up a quick program to help her out.

## How to test

Node.js should be installed on your side.

You can change input data in `input.txt` and `demension.txt`.

Run `npm start`.

When run `npm start`, the console shows `Done`.

Can see the result in `output.txt`.

## Instructions

Write two functions, "build" and "reserve", as described below

## `build(rows, cols, reserved)`

Simply builds and returns a data structure to represent a seating map. _See the "Initial Data" section below for the default arguments._

- `rows`: (int) the number of rows
- `cols`: (int) the number of columns (a.k.a. seats per row)
- `reserved`: (array) a 1D array of strings representing the seats that are already reserved (formatted as `"R1C1"`)

## `reserve(map, n)`

Reserves the best available (see "Additional Notes" below) contiguous block of n seats and returns map with those seats reserved

- `map`: (data structure/object/struct) the data structure from the build function used to represent your seating map
- `n`: (int) the number of contiguous seats in a row someone is looking to reserve

The reserve function should:

1. Find the best available seats
1. Mark those seats as reserved in the seating map
1. Print the start and end seats that were just reserved (e.g. `reserve(map, 3)` could print `"R1C4-R1C6"`)
1. Return map with these seated now reserved
1. If its not possible to fulfill a request, print "Not Available" and return the map as is

## Initial Data

Your starting map should have these 6 seats reserved for parents and friends:

R1C4 R1C6 R2C3 R2C7 R3C9 R3C10

By default, per your sisters initial seating map, your build method should be called with

`build(3, 11, ["R1C4","R1C6","R2C3","R2C7","R3C9","R3C10"])`

## Additional Notes

- Always try to reserve the best available block of seats. How "good" a particular seat is is simply the Manhattan Distance from the front center seat (in this case R1C5).
- The solution should be flexible enough so that it can work well with a variable number of seats and rows
- The max number of tickets someone can request at once is 10
- You are to choose the data structure of your choice for representing the map
- Seat reservations cannot span more than one row, e.g. for a 2 seat request, R1C3-R1C4 is valid but R1C3-R2C3 is not

## Solutions Judged On

- Performance (but don't get too hung up here, after all "premature optimization is the root of all evil")
- Clean, concise, commented code
- Bonus for clever solutions

## Submission

Email Solutions to the 1 <<3 | 0xC0DE @showclix.com (local name evaluated and in base 10 format, e.g. 1234@showclix.com)

We are looking for clever, well-documented and efficient solutions, although don't get too caught up with nitty gritty optimization. You may write the solution in whatever language you are most comfortable with. If you have any recent source code you would like to share (or a GitHub account) please feel free to do so as well.
