# Boggle Program

This program is a basic remake of the traditional Boggle Game. The User Interface is created using React, while the program itself is coded in ES6.

The Data Structures used in the findWords program are Trie and Depth First Search. 

## Rules & Points

### Rules

- Each word must be at least three letters
- Words will be counted once, regardless of meaning
- No repeat words
- Both singular and plural forms are aloud

### Points
*Points are dependant upon word length:*
- 3 letter = 1 point
- 4 letter = 1 point
- 5 letter = 2 points
- 6 letter = 3 points
- 7 letter = 5 points
- 8+ letter = 11 points

##[Click here to test out my Boggle Program](https://www.miguelacevedo.com/boggle)


## Resources
*Here's a list of resources I used to complete this project.*

- For Inspiration: https://wordshake.com/boggle

- For Words: https://github.com/hillmanov/go-boggle/blob/master/dictionary.txt

- Original Solution (Way too slow): https://www.geeksforgeeks.org/boggle-find-possible-words-board-characters/

- Much faster solution (Horizontal & Vertical): https://leetcode.com/problems/word-search-ii/discuss/1002899/Simple-JavaScript-solution-runtime-faster-than-99.25

- My Favorite solution (Horizontal & Vertical): https://leetcode.com/problems/word-search-ii/discuss/1216646/JavaScript-Solution-using-Trie-and-Backtracking