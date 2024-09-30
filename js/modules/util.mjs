/**
 * creates an element
 * @param {string} name - the tagname of the element
 * @param {object} options - an object with the attributes to assign the element
 * @returns {element} - the created element
 */
const createElement = (name, options = {}) => {
  const element = document.createElement(name);
  for (key of Object.keys(options)) {
    if (options[key] === undefined || options[key] === null) continue;
    element.setAttribute(key, options[key]);
  }

  return element;
}

/**
 * Gets an element with a CSS query
 * @param {string} q - A query selector for the element
 * @returns {HTMLElement|null} - the found element or null if it didn't find anything
 */
const getElement = (q) => document.querySelector(q);

/**
 * Gets a list of elements with a CSS query
 * @param {string} q - the query selector to use
 * @returns {NodeList} - A list of all found nodes
 */
const getElements = (q) => document.querySelectorAll(q);

export {
  createElement,
  getElement,
  getElements
}
