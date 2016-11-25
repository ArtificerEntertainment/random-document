# random-document
Create random documents for input testing.

## Usage

This is a command-line tool for randomly generating a list of JSON documents based on an input template.

To run the command use:

```
> node index.js [json template file name] [# of documents to generate] [json output file name]
```

Example command:

```
> node index.js sample-user-record-template.js 4 sample-output.json
Created 4 random json documents in records.json
```

Example input:

```json
{
  "userId": [1234, 1333, 1559, 1003, 1239, 4230],
  "userName": ["Adam Cook", "Adam Smith", "David Cook", "David Mortar", "Dale Sawyer"],
  "age": [11, 22, 33, 44, 55, 66]
}
```

Example output:

```json
{
  "documentList": [
    {
      "userId": 1559,
      "userName": "David Cook",
      "age": 66
    },
    {
      "userId": 1234,
      "userName": "Adam Cook",
      "age": 66
    },
    {
      "userId": 1234,
      "userName": "Dale Sawyer",
      "age": 11
    },
    {
      "userId": 4230,
      "userName": "Adam Cook",
      "age": 44
    }
  ]
}
```

## Disclaimer

This tool is rough, but it works. A list of possible improvements:
* Read the file asynchronously
* Stream the output instead of storing it in memory
* Use joi for input validation
* Add help to the command-line interface
* Add optional per-field uniqueness guarantees
* Allow for alternate template inputs such as a range of numbers instead of an array
