# The Demographics of International Students

https://observablehq.com/d/b4a48d916695afde@1476

#Details:

International Students are a massive cog in the greater system that accounts for college students in the United States. They come from a diverse panel of countries, and pursue an even wider variety of disciplines. According to UW, they account for 14.2% of UW's student body, almost 10% higher than the national average. Yet, there seems to be a gap between local and international students when it comes to social interaction and a general understanding of each other's similarities & differences. By providing various figures and visualizations describing the international student experience, we aim to bridge this gap.


View this notebook in your browser by running a web server in this folder. For
example:

~~~sh
npx http-server
~~~

Or, use the [Observable Runtime](https://github.com/observablehq/runtime) to
import this module directly into your application. To npm install:

~~~sh
npm install @observablehq/runtime@5
npm install https://api.observablehq.com/d/b4a48d916695afde@1476.tgz?v=3
~~~

Then, import your notebook and the runtime as:

~~~js
import {Runtime, Inspector} from "@observablehq/runtime";
import define from "b4a48d916695afde";
~~~

To log the value of the cell named “foo”:

~~~js
const runtime = new Runtime();
const main = runtime.module(define);
main.value("foo").then(value => console.log(value));
~~~
