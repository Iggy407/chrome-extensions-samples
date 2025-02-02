# Ideas

Try to use the CSV name detector on kaggle: [https://www.kaggle.com/datasets/bravehart101/sample-supermarket-dataset](https://www.kaggle.com/datasets/bravehart101/sample-supermarket-dataset).

And the combined CSV and Excel detector on https://data.mendeley.com/datasets/bvxrgng7y2/1.

## Overview

The provided `content.js` script is designed to locate and extract the text content of a specific HTML element on a webpage. It first attempts to find a `<p>` element with a precise combination of classes (`p.sc-gQaihK.sc-bwmSDE.bwaGMg.eYOaSs`). If this element is not found, it falls back to a more generic approach, searching for any `<p>` element that contains a class starting with `"sc-"`. If either of these elements is found, the script retrieves the text content of the element, which is assumed to be a CSV filename, and logs it to the console. If no matching element is found, it logs a message indicating that the CSV filename element could not be located. This script is useful for scenarios where you need to dynamically extract specific data from a webpage's DOM structure.

## Implementation Notes

None
