# Axios Notes/Resources

#### Docs

[Axios Docs](https://axios-http.com/docs/intro)

### What is 'AXIOS'..?

Axios is a popular JavaScript library used for making HTTP requests from web browsers or Node.js environments. It provides an easy-to-use API that simplifies the process of sending asynchronous HTTP requests and handling responses. Axios supports various features such as making GET, POST, PUT, DELETE requests, interceptors, request and response transformations, and more.

- Key features of Axios include:

1. **Simple API:** Axios provides a simple and intuitive API for making HTTP requests, allowing developers to easily send requests and handle responses with promises.

2. **Promise-based:** Axios is built on top of JavaScript promises, making it easy to handle asynchronous operations using `.then()` and `.catch()` methods or async/await syntax.

3. **Support for various environments:** Axios can be used in both web browsers and Node.js environments, making it versatile for client-side and server-side applications.

4. **Interceptors:** Axios allows you to intercept requests and responses, enabling you to modify headers, log requests, handle errors, and perform other tasks before and after requests are sent.

5. **Request and response transformations:** Axios provides options for transforming request and response data, such as converting JSON data, adding headers, or serializing request parameters.

Overall, Axios is widely used in web development for its simplicity, flexibility, and robust feature set, making it a preferred choice for handling HTTP requests and managing API communication in JavaScript applications.

Axios and the native `fetch` API both serve the same purpose: making HTTP requests from a web browser. However, Axios offers several advantages over `fetch`, which make it a popular choice for many developers when working with React or any other JavaScript framework. Here are some reasons why Axios is often preferred:

1. **Simpler API**: Axios provides a more user-friendly and consistent API compared to `fetch`. It has clear methods for different HTTP request types (GET, POST, PUT, DELETE, etc.), making it easier to use and understand.

2. **Automatic JSON Parsing**: Axios automatically parses JSON responses, whereas with `fetch`, you need to explicitly call the `.json()` method on the response object to parse JSON data.

3. **Interceptors**: Axios allows you to define interceptors that can intercept requests or responses before they are handled by `then` or `catch`. This makes it easy to globally handle errors, modify requests, or add headers.

4. **Promise Cancellation**: Axios supports cancellation tokens, which allow you to cancel requests in flight. This can be useful for scenarios like canceling requests when navigating away from a page or when a component is unmounted.

5. **Error Handling**: Axios provides built-in error handling that automatically rejects promises for non-2xx status codes. With `fetch`, you need to manually check for error responses and handle them accordingly.

6. **Browser Compatibility**: Axios works consistently across all browsers, including older ones, without requiring polyfills. `fetch` is supported in modern browsers, but for older browsers, you may need to use a polyfill or fallback library.

7. **Community Support**: Axios has a large and active community with plenty of resources, documentation, and third-party integrations available. This can make it easier to find help and solutions to common problems.

While `fetch` is built into the browser and may be sufficient for simple use cases, Axios offers a more feature-rich and developer-friendly experience, making it a popular choice for handling HTTP requests in React applications. However, the choice between Axios and `fetch` ultimately depends on your specific project requirements and preferences.

# Let's illustrate the differences between Axios and the native `fetch` API with code examples:

1. **Simpler API**:

# Axios:
```javascript
import axios from 'axios';

// GET request
axios.get('https://api.example.com/data')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

// POST request
axios.post('https://api.example.com/post', { data: 'some data' })
  .then(response => {
    console.log('Post successful:', response.data);
  })
  .catch(error => {
    console.error('Error posting data:', error);
  });
```

# Fetch:
```javascript
// GET request
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

// POST request
fetch('https://api.example.com/post', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ data: 'some data' })
})
.then(response => response.json())
.then(data => {
  console.log('Post successful:', data);
})
.catch(error => {
  console.error('Error posting data:', error);
});
```

 2. **Automatic JSON Parsing**:

# Axios:
```javascript

axios.get('https://api.example.com/data')
  .then(response => {
    console.log(response.data); // Automatically parsed JSON
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
```

# Fetch:
```javascript
fetch('https://api.example.com/data')
  .then(response => response.json()) // Need to manually parse JSON
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
```

 3. **Interceptors**:

# Axios:
```javascript
axios.interceptors.response.use(response => {
  // Do something with the response
  return response;
}, error => {
  // Handle errors
  return Promise.reject(error);
});
```

4. **Promise Cancellation**:

# Axios:
```javascript
const source = axios.CancelToken.source();

axios.get('https://api.example.com/data', {
  cancelToken: source.token
})
.then(response => {
  console.log(response.data);
})
.catch(error => {
  if (axios.isCancel(error)) {
    console.log('Request cancelled:', error.message);
  } else {
    console.error('Error fetching data:', error);
  }
});

// Cancel the request
source.cancel('Request cancelled');
```

 5. **Error Handling**:

# Axios:
Automatically handles non-2xx status codes.

# Fetch:
```javascript
fetch('https://api.example.com/data')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
```

6. **Browser Compatibility**:

Both Axios and `fetch` are compatible with modern browsers. For older browsers, Axios usually works out of the box, while `fetch` may require a polyfill or fallback library like `isomorphic-fetch`.

 7. **Community Support**:

Axios has a large and active community with extensive documentation, tutorials, and third-party integrations available. Fetch also has good community support but may require more effort to find solutions to specific problems.

These examples demonstrate some of the key differences between Axios and `fetch`, but the choice between them ultimately depends on your specific project requirements and preferences.
```

------------------ SETUP -------------------------------
#### Install

```sh
npm install axios
```

```js
<script src='https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js'></script>
```

#### First Request

- import axios

- axios.get(url)
- axios.post(url)
- axios.patch/put(url)
- axios.delete(url)

- default get axios(url)

- returns a promise
- response data located in data property
- error in error.response

```js
import axios from 'axios';

const fetchData = async () => {
  try {
    // axios.get(), axios.post(),axios.put(), axios.delete()
    const response = await axios(url);

    console.log(response);
  } catch (error) {
    console.log(error.response);
  }
};
```

#### Headers

- second argument
- axios.get(url,{})

- third argument in requests with data
- axios.post(url,{data},{})

```js
const fetchDadJoke = async () => {
  try {
    const { data } = await axios(url, {
      headers: {
        Accept: 'application/json',
      },
    });
    // console.log(data);
    setJoke(data.joke);
  } catch (error) {
    console.log(error.response);
  }
};
```

#### Post Request

- send data to the server
- axios.post(url, { data })
- more options (auth header) - axios.post(url, { data },{})

```js
try {
  const resp = await axios.post(url, { data });
} catch (error) {
  console.log(error.response.data);
}
```

#### Global Defaults

In Axios, global defaults are configurations that apply to all Axios requests made within your application. These defaults are set using the `axios.defaults` object. Setting global defaults allows you to define common configurations such as base URL, headers, timeout, and response type once, and they will be automatically applied to all Axios requests unless overridden.

Here are some common global defaults that you can set in Axios:

1. **Base URL**: You can set a base URL that will be prepended to all relative URL requests. This is useful when you are making requests to the same API server throughout your application.

    ```javascript
    axios.defaults.baseURL = 'https://api.example.com';
    ```

2. **Headers**: You can set default headers that will be included in every request. This is useful for setting authorization tokens, content type, or any other headers that are common across all requests.

    ```javascript
    axios.defaults.headers.common['Authorization'] = 'Bearer token';
    axios.defaults.headers.post['Content-Type'] = 'application/json';
    ```

3. **Timeout**: You can set a default timeout for all requests. This is the amount of time (in milliseconds) that Axios will wait for a response before aborting the request.

    ```javascript
    axios.defaults.timeout = 5000; // 5 seconds
    ```

4. **Response Type**: You can set a default response type for all requests. This determines how Axios should parse the response data. For example, you can specify `'json'` to automatically parse JSON responses.

    ```js
    axios.defaults.responseType = 'json';
    ```

By setting these global defaults, you can streamline your Axios requests and avoid repeating common configurations throughout your application. However, keep in mind that you can still override these defaults on a per-request basis if needed.

--------------------------------------------------------------------------------------------------------------------------

```js
// In latest axios version common property returns "undefined"
// axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.headers['Accept'] = 'application/json';

axios.defaults.baseURL = 'https://api.example.com';

// In latest axios version common property returns "undefined"
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers['Authorization'] = AUTH_TOKEN;

axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded';
```

#### Custom Instance

In Axios, a custom instance refers to creating a new Axios instance with custom configurations separate from the global defaults. This allows you to have multiple Axios instances in your application, each with its own set of configurations tailored to specific use cases.

Creating a custom instance in Axios is achieved by calling the `axios.create()` method, which returns a new Axios instance. You can then customize this instance by providing configuration options as parameters to the `axios.create()` method.

Here's how you can create a custom instance in Axios:

```javascript
import axios from 'axios';

// Create a custom Axios instance with specific configurations
const customAxiosInstance = axios.create({
  baseURL: 'https://api.example.com',
  timeout: 5000,
  headers: {
    'Authorization': 'Bearer token',
    'Content-Type': 'application/json'
  }
});

// Now you can use this custom instance to make requests
customAxiosInstance.get('/endpoint')
  .then(response => {
    // Handle response
  })
  .catch(error => {
    // Handle error
  });
```

In the example above, we created a custom Axios instance called `customAxiosInstance` with a base URL, timeout, and default headers. Any requests made using this custom instance will inherit these configurations. This is particularly useful when you need to interact with multiple APIs or when you have specific requirements for certain types of requests. Additionally, it helps keep your code organized and avoids repetition of configuration settings.
-------------------------------------------------------------------------------------------------
```js
const authFetch = axios.create({
  baseURL: 'https://course-api.com',
  headers: {
    Accept: 'application/json',
  },
});
```

#### Interceptors

In Axios, interceptors are middleware functions that can be registered globally or on a per-request basis to intercept requests or responses before they are handled by the `axios` instance. Interceptors provide a powerful mechanism for manipulating requests or responses, adding headers, logging, handling errors, and performing other tasks asynchronously.

There are two types of interceptors in Axios:

1. **Request Interceptors:** Request interceptors are functions that are executed before the request is sent. They allow you to modify the request configuration or perform actions like adding headers, logging, or modifying the request data.

2. **Response Interceptors:** Response interceptors are functions that are executed when a response is received from the server but before it is passed to the `then` or `catch` handlers. They allow you to modify the response data, handle errors, or perform other tasks before the response is processed by the application.

Here's how you can use interceptors in Axios:

```javascript
import axios from 'axios';

// Add a request interceptor
axios.interceptors.request.use(
  config => {
    // Modify request config, add headers, log request details, etc.
    console.log('Request intercepted:', config);
    return config;
  },
  error => {
    // Handle request error
    console.error('Request error:', error);
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  response => {
    // Modify response data, handle success
    console.log('Response intercepted:', response);
    return response;
  },
  error => {
    // Handle response error
    console.error('Response error:', error);
    return Promise.reject(error);
  }
);

// Make a request
axios.get('https://api.example.com/data')
  .then(response => {
    // Handle response
    console.log('Response data:', response.data);
  })
  .catch(error => {
    // Handle error
    console.error('Request failed:', error);
  });
```

In the example above:
- We register request and response interceptors using `axios.interceptors.request.use()` and `axios.interceptors.response.use()` methods.
- Request interceptor modifies the request configuration (e.g., adding headers) and logs the request details.
- Response interceptor logs the response details and modifies the response data if needed.
- Finally, we make a request using Axios, and the interceptors are executed before the request is sent and after the response is received.

-----------------------------------------------------------------------------------------------

- global and custom

```js
authFetch.interceptors.request.use(
  (request) => {
    // request.headers.common['Accept'] = `application/json`;
    request.headers['Accept'] = `application/json`;

    console.log('request sent');
    // must return request
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

authFetch.interceptors.response.use(
  (response) => {
    console.log('got response');
    return response;
  },
      console.log('NOT FOUND');
    }
    return Promise.reject(error);
  }
);
```

##### Update

In the latest version there is no common property

```js
// In latest axios version common property returns "undefined"
// axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.headers['Accept'] = 'application/json';

// In latest axios version common property returns "undefined"
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers['Authorization'] = AUTH_TOKEN;
```

```js
// request.headers.common['Accept'] = `application/json`;
request.headers['Accept'] = `application/json`;
```
