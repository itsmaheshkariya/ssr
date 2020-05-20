![demoofqcom](https://unpkg.com/@qcom.io/qcom@1.0.36/qcom.png)
### Deno Server side HTML functions.

## Rules 
`HTML`
```html 
<h1 class="head"  style = "color:red;  background-color:  yellow"    id="heading" > I am H1 </h1>
```
`Qcom`
```js
h1({class:'head', style:{ color:'red', backgroundColor : 'Yellow' }, id:'heading' }, 'I am H1' )
```
`Example`
```ts
import { serve } from "https://deno.land/std/http/server.ts";
import {body,h1} from "https://deno.land/x/ssr/index.ts";

const s = serve({ port: 8000 });
const color = 'yellow';
const template = body(h1({style:{color:color}},'Hello World'))
for await (const req of s) { req.respond({ body : template })
}

```

**Grammar:**

```
                                        function
 ┌─────────-───────────────────────────────┴────────────────────────────────────────────────────────┐
 │                            separators                                                            |
 │                   ┌────────────┴───┬────────────────┬───────────────────────────┐                |
 |                   ↓                ↓                ↓                           ↓                |
p(  { to:'firstname' ,   class:'mt12' , id:'firstname' , style: {color:color.red} }, 'Hello World'  )
        └───┬───┘          └───┬───┘     └────┬───┘       └────┬────────┘                 |
            ┴───────────┬──────┴─────-──-─────┘-──-─────-─────-┘                          |
                   attributes                                                           Text
