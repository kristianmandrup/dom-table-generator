# Simple Fetch and Table DOM render example

Perfect, minimalistic usable example for job interviews where this is a common exercise.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="table.js"></script>
  <script src="fetch-and-render.js"></script>
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

## Serve the static html page

`npm i serve`

Use `serve` to serve `index.html`, f.ex via `npx serve`