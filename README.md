# McGillJournalOfMedecine.github.io
Website for MJM

## Instructions for maintainer:

###Adding content to the website:

You can add content to the file by following the examples on the JSON files. The website will automatically take care of pathing for you so all you have to do is add the filename + the extension (see JSON files for clarification).


###About pathing:

Make sure you don't move folders and files out of their directories unless you know what you're doing or else the website won't be able to find the relevant files.

###About backend:

Due to the absence of a server, I've made everything client-sided. Should you decide to add a backend, the only thing you need to do is change the JSON files and the website will handle the rest. Use google forms if you want forms without having a backend.

###About deployment:

The JSX file (main.js) is not compiled and all the librairies don't use their minified versions. Applying these optimizations should greatly reduce load time.

###Technology:

This website uses React and React-Bootstrap to handle mobile compatibility and the front-end. Babel takes care of compiling the JSX syntax to readable JS. JQuery handles data loading for the front-end. This is a bit of a cookie cutter solution for doing client-side only things so I would recommend changing this should one ever decide to add a backend.
