# PDF Merger Script

This Node.js script uses the `pdf-merger-js` npm package to merge multiple PDF files into a single PDF document. The merged PDF is then saved as a new file.

## Prerequisites

Make sure you have Node.js and npm installed on your system.

## Installation

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the required npm packages using the following command:
`npm install`

## Usage

1. Place the PDF files that you want to merge in the `files` directory.
2. Modify the `docs` array in the `main.js` file to include the names of the PDF files you want to merge.

```javascript
const docs = ['pdf1.pdf', 'pdf1'];
```
### Run the script using the following command:
`node main.js`