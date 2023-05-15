const puppeteer = require('puppeteer');

(async () => {
    // Launch a new headless browser instance
    const browser = await puppeteer.launch();

    // Open a new page
    const page = await browser.newPage();

    // Navigate to the page you want to export
    await page.goto('http://localhost:3000/releases/3.0');

    // Set the page size to A4
    await page.pdf({
        path: 'export.pdf',
        format: 'A4',
    });

    // Close the browser instance
    await browser.close();
})();
