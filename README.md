# Ideas

Try to use the CSV name detector on kaggle: [https://www.kaggle.com/datasets/bravehart101/sample-supermarket-dataset](https://www.kaggle.com/datasets/bravehart101/sample-supermarket-dataset), and test on another dataset https://www.kaggle.com/datasets/ankushpanday1/leukemia-cancer-risk-prediction-dataset.

(This is still work in progress) And the combined CSV and Excel detector on https://data.mendeley.com/datasets/bvxrgng7y2/1.


## Overview

At the moment the extension is able to find the name of the CSV file from kaggle. I think coding the extension such that the CSV from kaggle is directly imported into the LION website is possible and probably easier than the excel file as a downloadable document: [https://community.tableau.com/s/question/0D54T00000CWeX8SAL/sample-superstore-sales-excelxls](https://community.tableau.com/s/question/0D54T00000CWeX8SAL/sample-superstore-sales-excelxls). The mendeley page should also work because uses a  HTML span element to identify the xls files e.g., `<span class="name" title="Voronoi_10.xlsx">`.

## Details (do not read unless you have time)

The provided `content.js` script is designed to locate and extract the text content of a specific HTML element on a webpage. It first attempts to find a `<p>` element with a precise combination of classes (`p.sc-gQaihK.sc-bwmSDE.bwaGMg.eYOaSs`). If this element is not found, it falls back to a more generic approach, searching for any `<p>` element that contains a class starting with `"sc-"`. If either of these elements is found, the script retrieves the text content of the element, which is assumed to be a CSV filename, and logs it to the console. If no matching element is found, it logs a message indicating that the CSV filename element could not be located. This script is useful for scenarios where you need to dynamically extract specific data from a webpage's DOM structure.
