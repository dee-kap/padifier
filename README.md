Padifier can be used to add padding on left or right side of a string. 

Padding can be empty spaces or any character.

## How to use

```
npm install padifier
```

### Left padding

```
var padifier = require('padifier');

padifier.padLeft('howdy', 5, ' '); // pad with empty space
padifier.padLeft('howdy', 5, '$'); // pad with $ sign

```

### Right padding


```
var padifier = require('padifier');

padifier.padRight('howdy', 5, ' '); // pad with empty space
padifier.padRight('howdy', 5, '$'); // pad with $ sign

```

### Pad both left and right


```
var padifier = require('padifier');

padifier.padBoth('howdy', 5, ' '); // pad with empty space
padifier.padBoth('howdy', 5, '$'); // pad with $ sign

```

## Run Tests

```
npm install && npm test
```

## License

MIT 

