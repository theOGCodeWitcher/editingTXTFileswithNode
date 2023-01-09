wcat 

It is used to display or make a copy of the content of one or more files using terminal
Also used shebang syntax to make the command global

### use jarvis (followed by the below commands to run them)


## List of all Commands:

1- wcat filepath => displays content of the file in the terminal

2- wcat filepath1 filepath2 filepath3... => displays content of all
files in the terminal(contactinated form) in the given order.

3- wcat -s filepath => convert big line breaks into a singular line
lat La

4- wcat -n filepath => give numbering to all the lines

5- wcat -b filepath => give numbering to non-empty lines

6- wcat filepath > filename2path => put all the content of filename
into filename2 by overriding and also creates filename2 if it doesn't
(ek a

7- wcat filename2path >> filename2path => append all the content of
BOT Mag Ma ad

8- node wcat -s filename > filename2 =>get the file content of filename
remove large spaces and save the output in filename2

We can mix and match the options.

## Edge cases:
1- If file entered is not found then it gives file does not exist error.

2- -n and -b are 2 options which are mutually exclusive so if user
types both of them together only the first enter option should work.
