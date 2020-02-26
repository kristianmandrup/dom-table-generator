# Simple Fetch and Table DOM render example

Perfect, minimalistic usable example for job interviews where this is a common exercise.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="unpkg.com/dom-table-generator@1.0.0"></script>
  <title>Table</title>
</head>
<body>
  <table id="x"></table>
  <script>
    const opts = {
      decorateRow(row, {index}) {
        row.setAttribute("data-index", index);
      },
      decorateCell(cell, { key, index}) {
        cell.setAttribute("style", "color:green;");
      }
    }
    fetchAndRender('http://localhost:5000/data/mountains.json', (data) => {
      tableFor("#x", data, opts)
    })
  </script>
</body>
</html>
```

## Decorators supported

Decorators can be passed in to fine-tune the DOM elements being output to the DOM (ie. HTML document).

- `decorateTable(tableEl)`
- `decorateHeadCell(thEl, { index })`
- `decorateRow(rowEl, { index })`
- `decorateCell(rowEl, { index, key })`

## Serve static html page

The `index.html` file included serves an example of how to use the API (helper functions)

`$ npm i serve` install serve locally (use `-g` to install globally)

Use `serve` to serve `index.html` (use `npx serve` if `serve` package is installed locally)

```sh
$ serve

Serving!

- Local: http://localhost:5000

Copied local address to clipboard!
```

`$ open index.html`
