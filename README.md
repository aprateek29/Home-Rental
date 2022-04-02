# Realtor

Check the live version here.
https://realtor2.netlify.app/

House Rental (Realtor) is an app build with React JS (& next.js) . It checks every house for price
changes. User can search/sort/find the house listed on the api.

* **Show Stopper** the search includes 10 different categories to search in listed properties.
* **Show Stopper** the sort includes 10 different categories to sort listed properties.
* **ES modules** and **Server side rendering** support.
* **Styled Components** for styling.
* **Chakra UI** for ui components.
* **Axios** for fetch requests.

## About Rapid Api

There are thousands of APIs out there that do things like store files, enrich data, and send messages. Because each API has its own structure, data format, and networking protocols, finding and connecting to the right one can be difficult and time-consuming. RapidAPI is the world’s largest API hub with over 3 million developers accessing more than 30,000 APIs.

## Api I used

Bayut
* This API helps to query real estate in UAE to create a real estate site/application


## Usage

### JS Applications

This is a Next.Js Project. You can install the dependencies and run the app.

<details><summary><b>Show instructions</b></summary>

1. Install the dependencies:

    ```sh
    $ npm install 
    ```

2. Run the app in the browser.

    ```diff
    $ npm run dev
    ```

3. Open localhost:3000 in the browser

</details>


## Dependencies


* `@chakra-ui/react` : "^1.6.8", Chakra Ui provides a robust, customizable, and accessible library of foundational and advanced components
* `@emotion/react` : "^11.4.1",  Simple styling in React
* `@emotion/styled` : "^11.3.0",  The styled API for @emotion/react
* `axios` : "^0.23.0",  Promise based HTTP client for the browser and node.js
* `framer-motion` : "^4.1.17",  A production-ready motion library for React
* `millify` : "^4.0.0",  Converts long numbers to pretty, human-readable strings
* `next` : "11.1.2",  Used for server-side rendering and generating static websites
* `nprogress` : "^0.2.0",  Slim progress bars for Ajax'y applications
* `react-horizontal-scrolling-menu` : "^2.3.2",  This is a horizontal scrolling menu component for React
* `react-icons` : "^4.2.0"  To include popular icons in React project


## JS API

```js
const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "8fea9e4313mshff70c89c39b4079p1ab681jsnb8c5b21007a0",
    },
  });
```
