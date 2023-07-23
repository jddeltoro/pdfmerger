const PDFMerger = require('pdf-merger-js');
const fs = require('fs');
var merger = new PDFMerger();
var docs = ['nameofpdf1.pdf', 'nameofpdf2.pdf', 'nameofpdf3.pdf'];

(async () => {
    // iterate over docsClone and add each doc to the merger
    for (let doc of docs) {
        await merger.add('files/'+doc);
    }
    await merger.save('merged.pdf'); //save under given name and reset the internal document

    // Export the merged PDF as a nodejs Buffer
    const mergedPdfBuffer = await merger.saveAsBuffer();
    fs.writeFile('merged.pdf', mergedPdfBuffer, (err) => {
        if (err) {
            console.error('Error writing the merged PDF:', err);
        } else {
            console.log('Merged PDF successfully saved!');
        }
    });
})();

