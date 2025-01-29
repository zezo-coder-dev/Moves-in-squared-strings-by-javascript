# Moves-in-squared-strings-by-javascript
Moves in squared strings problem in codewars by javascript

<h3>
  You are given a string of n lines, each substring being n characters long: For example:
</h3>

```javacript
s = "abcd\nefgh\nijkl\nmnop"
```

<p>We will study some transformations of this square of strings.</p>

Let's now transform this string!

Symmetry with respect to the main diagonal: diag_1_sym (or diag1Sym or diag-1-sym)
```javascript
diag_1_sym(s) => "aeim\nbfjn\ncgko\ndhlp"
Clockwise rotation 90 degrees: rot_90_clock (or rot90Clock or rot-90-clock)
rot_90_clock(s) => "miea\nnjfb\nokgc\nplhd"
selfie_and_diag1(s) (or selfieAndDiag1 or selfie-and-diag1) It is initial string + string obtained by symmetry with respect to the main diagonal.
s = "abcd\nefgh\nijkl\nmnop" --> 
"abcd|aeim\nefgh|bfjn\nijkl|cgko\nmnop|dhlp"
or printed for the last:
selfie_and_diag1
abcd|aeim
efgh|bfjn
ijkl|cgko 
mnop|dhlp
```

## Task:
Write these functions diag_1_sym, rot_90_clock, selfie_and_diag1
and
```javascript
high-order function oper(fct, s) where
```
fct is the function of one variable f to apply to the string s (fct will be one of diag_1_sym, rot_90_clock, selfie_and_diag1)

Examples:
```javascript
s = "abcd\nefgh\nijkl\nmnop"
oper(diag_1_sym, s) => "aeim\nbfjn\ncgko\ndhlp"
oper(rot_90_clock, s) => "miea\nnjfb\nokgc\nplhd"
oper(selfie_and_diag1, s) => "abcd|aeim\nefgh|bfjn\nijkl|cgko\nmnop|dhlp"
```

Notes:
The form of the parameter fct in oper changes according to the language. You can see each form according to the language in "Your test cases".

It could be easier to take these katas from number (I) to number (IV)

Bash Note: The output strings should be separated by \r instead of \n. See "Sample Tests".

## In main.js file

## Breaking It Down:
```return```: This means we're giving something back from the function. It’s like saying, "Here's the result!" <br />
```arr```: This is a variable that represents an array (a list of things). In our context, it's a list of strings (like words). <br />
```.```: This is an operator that lets us use a method on arr. Here, we’re using the map method.
map(: This is a method that goes through each item in arr and does something to it. It’s like saying, "For each toy in my toy box, do this."  <br />
```(str, i)```:
```str```: This is a variable representing the current string (or word) from the array.  <br />
```i```: This represents the index (or position) of the current string in the array, starting from 0 (like counting your toys).  <br />
```=>```: This is an arrow that means "then do this." It’s like saying, "After I pick a toy, now I’m going to do something with it."  <br />
str.replace(: This uses the replace method on the current string (str). It’s like saying, "Change something in this toy."
```/./g```: <br />
```/```: Starts a regular expression (a way to find patterns in text).  <br />
```.```: Means "any character" (like any letter or number).  <br />
```g```: Stands for "global," meaning to find all matches in the string, not just the first one.  <br />
```,```: This separates the arguments for the replace method.  <br />
```(_, j)```:  <br />
```_```: This is a placeholder for the first argument (the matched character) that we don’t need, so we use _ to ignore it.  <br />
```j```: This is the index of the character we found with the replace method, starting from 0.  <br />
```=>```: Again, this means "then do this" for the next part.  <br />
```arr[j][i]```: <br />
```arr[j]```: This gets the string at index j from the original array. <br />
```[i]```: This gets the character at index i from that string. <br />
So together, ```arr[j][i]``` means, "Get the character from the string at position ```j``` and from the ```i``` position."
## Summary
So, this entire line of code is going through each word in the array, looking at each character, and replacing it with a character from a different position, effectively rotating or transforming the strings based on their positions in the array. It’s like taking each toy, looking at it, and then putting a different toy in its place based on a special rule!
