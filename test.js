// test.js

// Mocking the DOM elements
const { JSDOM } = require('jsdom');
const jsdom = new JSDOM();
global.document = jsdom.document;
global.window = jsdom.window;

// Import the function to be tested
const dynamicClothingSection = require('./yourScript.js');

describe('dynamicClothingSection function', () => {
  test('should append a div element to the container', () => {
    const testData = {
      id: 1,
      name: "Product 1",
      brand: "Red mens shirt",
      preview: "img/product1.jpeg",
      price: "50",
      isAccessory: false
    };

    // Create mock container elements
    const containerClothing = document.createElement('div');
    containerClothing.id = 'containerClothing';
    const containerAccessories = document.createElement('div');
    containerAccessories.id = 'containerAccessories';

    // Append mock container elements to the document
    document.body.appendChild(containerClothing);
    document.body.appendChild(containerAccessories);

    // Call the function to be tested
    dynamicClothingSection(testData);

    // Write your assertions here
    // For example, you can assert that the container has the correct number of child elements
    expect(containerClothing.childElementCount).toBe(1);
  });
});
