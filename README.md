# Mock-dlauerma-scox5

## Project: Mock

## Project Members:

Sahidah Cox
David Lauerman

## Link to Repo:

https://github.com/cs0320-f23/mock-dlauerma-scox5

## Design

The REPLInput file handles the input to the command line and distributes it out to helpers, with one function for each command.
Search, load, and view are the commands and they each have a function to handle them.
Load returns a a response using the 'Line' that we created, while the other two return a 'Table', which converts 2D string array to HTML Table.
The file that is currently loaded is stored in a shared state at the REPLInput level. This would likely be handled on the backend if the server API was functioning, so upon connection that would be removed. However, this strategy made mocking much more straightforward without sacrificing anything, adapting is pretty trivial.

## Bugs

Our CSV responses, which come as HTML tables, are not centered.  
As a result of the mocking methods, not including all of the requisite commands for search does not make a difference.

## Tests

We tested for visibility of all the elements, checked that our state was what it should be, and that the commands returned expected values.
Along the way we tested our smaller components but did not generally include this in the final functionality testing.

## How To Run

Run the server using npm start in the mock directory. when you go to the port opened (mine is 8000) you should see our interface. Type your desired command into the command line, then press the button. There are four commands:

- mode -- switches from brief mode, which will just return the <output>, to verbose mode, which will return your command as Command: <command> and the output as Output: <output>.
- load_file <filepath to CSV> -- this will load the CSV you want to view/search. Will return a message stating whether the CSV could find the filepath or not.
- search <target> <column> -- this takes your search criteria and does nothing
- view
