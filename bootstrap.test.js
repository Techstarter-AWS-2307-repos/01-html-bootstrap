const { readFileSync } = require('fs');
const { resolve } = require('path');
const { TextEncoder, TextDecoder } = require("util");
Object.assign(global, { TextDecoder, TextEncoder });
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const html = readFileSync(resolve(__dirname, './index.html'), 'utf8');
// Use require instead of import


let dom;
let container;

describe('index.html', () => {
    beforeEach(() => {
        dom = new JSDOM(html);
        doc = dom.window.document;
        container = dom.window.document.body;
    });

    it('contains Bootstrap CSS', () => {
        const linkElement = doc.querySelector('link[rel="stylesheet"][href*="bootstrap"]');
        // const linkElement = doc.querySelector('link');
        expect(linkElement).not.toBeNull();
    })

    it('loads CSS from correct CDN', () => {
        const linkElement = doc.querySelector('link[rel="stylesheet"][href*="bootstrap"]');
        const href = linkElement.href;
        const isCorrectCDN = href.includes('cdn.jsdelivr.net')
        expect(isCorrectCDN).toBe(true);
    })

    it('contains Bootstrap JS', () => {
        const scriptElement = container.querySelector('script');
        console.log(scriptElement.src);
        expect(scriptElement).not.toBeNull();
    })

    it('loads JS from correct CDN', () => {
        const scriptElement = container.querySelector('script');
        const src = scriptElement.src;
        const isCorrectCDN = src.includes('cdn.jsdelivr.net')
        expect(isCorrectCDN).toBe(true);
    })

    it('contains a navbar', () => {
        expect(container.querySelector('.navbar')).not.toBeNull();
        expect(container.querySelector('.navbar-brand')).not.toBeNull();
        expect(container.querySelectorAll('.nav-item').length).toBeGreaterThan(0);
        expect(container.querySelectorAll('.nav-link').length).toBeGreaterThan(0);
    });

    it('contains a container', () => {
        expect(container.querySelector('.container')).not.toBeNull();
    });

    it('contains a footer', () => {
        expect(container.querySelector('footer')).not.toBeNull();
    });

    // Weitere Tests für andere Bootstrap-Klassen und -Komponenten können hier hinzugefügt werden.
});
