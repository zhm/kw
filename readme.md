# kill whitespace

Kill dead whitespace from the command line.

## Installation

```
npm install -g kw

# kill all whitespace in files in the current directory
➜ kw .

# kill all whitespace in a specific file
➜ kw /path/to/file.txt

# pipe data through it
➜ cat /some/file | kw > /some/other/file
```

## Usage

```
➜  kw
Usage: kw file

Options:
  -t, --type  File types to include. The defaults are rb, sass, js, coffee, jade, haml, html, rake, json, txt, md
```

## API

### `kw(text)`

Kill all dead whitespace in the text.

```javascript
var kw = require('kw');

console.log(kw('this line has dead whitespace \n'));
```
