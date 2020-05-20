export let camelCaseToDash = ( str: string ) => {
    return str.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase();
}
export let dashToCamelCase = ( myStr: any ) => {
    return myStr.replace(/-([a-z])/g, (g: string[]) => {
        return g[1].toUpperCase();
    });
}

export let isFunction = (functionToCheck: any) => {
    return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
}
export let makemycss = (val1: any[]) =>
{
    let val2 = ``;
    for(let i = 0;i<Object.keys(val1).length;i++){
        if(typeof Object.values(val1)[i] === 'object'){
            let hold = makemycss(Object.values(val1)[i])
            val2 += ``+camelCaseToDash(Object.keys(val1)[i])+`{`+hold+`}`
        }else{
            val2 += ``+camelCaseToDash(Object.keys(val1)[i])+`:`+Object.values(val1)[i]+`;`
        }

    }
    return val2;
}
export let tocss = (...val: any[]) =>{
     return `<style>`+makemycss(val[val.length - 1])+`</style>`
}


export let recursiveLoop1 = (val1: any[]) =>
{
    let val2 = ``;
    for(let i = 0;i<Object.keys(val1).length;i++){
        if(typeof Object.values(val1)[i] === 'object'){
            let hold = recursiveLoop1(Object.values(val1)[i])
            val2 += ``+camelCaseToDash(Object.keys(val1)[i])+`:`+hold+` `
        }else{
            val2 += ``+camelCaseToDash(Object.keys(val1)[i])+`:`+Object.values(val1)[i]+`;`
        }
    }
    return val2;
}

export let recursiveLoop = (val1: any[]) =>
{
    let val2 = ``;
    for(let i = 0;i<Object.keys(val1).length;i++){
        if(typeof Object.values(val1)[i] === 'object'){
            let hold = recursiveLoop1(Object.values(val1)[i])
            val2 += ` `+camelCaseToDash(Object.keys(val1)[i])+`="`+hold+`" `
        }else{
            val2 += ` `+camelCaseToDash(Object.keys(val1)[i])+`='`+Object.values(val1)[i]+`' `
        }
    }
    return val2;
}


export let makeMyFunction = (tag: string) =>
{
    return (...val: any) =>
    {

            let temp = ''
            let j = 0;
            if(typeof Object.values(val)[0] === 'object'){
                j = 1;
            }
            for(let i = j;i<val.length;i++)
            {

                if(isFunction(val[i])){
                    let hold = val[i]()
                    if(typeof hold == 'object'){
                        hold.forEach((item: string)=>{
                            temp += item
                        })

                    }else{
                        temp += hold
                    }

                }else{
                    if(typeof val[i] == 'undefined'){
                        // console.log(val[i])
                        // eval(val[i])
                    }
                    else{
                        temp += val[i]
                    }
                    }
            }

            if(typeof Object.values(val)[0] === 'object'){

                let val1 = val[0];
                let val2 = recursiveLoop(val1)
                // console.log(val2)
                return '<'+tag+' '+val2+'>'+temp+'</'+tag+'>'
            }else{
                return '<'+tag+'>'+temp+'</'+tag+'>';
            }




    }
}



export let makeMyFunctionSingle = (tag: string) =>
{
    return (...val: any) =>
    {

            let temp = ''
            let j = 0;
            if(typeof Object.values(val)[0] === 'object'){
                j = 1;
            }
            for(let i = j;i<val.length;i++)
            {

                if(isFunction(val[i])){
                    let hold = val[i]()
                    if(typeof hold == 'object'){
                        hold.forEach((item: any)=>{
                            temp += item
                        })

                    }else{
                        temp += hold
                    }

                }else{
                    if(typeof val[i] == 'undefined'){
                        // console.log(val[i])
                    }
                    else{
                        temp += val[i]
                    }
                    }
            }

            if(typeof Object.values(val)[0] === 'object'){

                let val1 = val[0];
                let val2 = recursiveLoop(val1)
                // console.log(val2)
                return '<'+tag+' '+val2+''+temp+'/>'
            }else{
                return '<'+tag+''+temp+'/>';
            }




    }
}




export let div = makeMyFunction('div')
export let label = makeMyFunction('label')
export let h1 = makeMyFunction('h1')
export let h2 = makeMyFunction('h2')
export let h3 = makeMyFunction('h3')
export let h4 = makeMyFunction('h4')
export let h5 = makeMyFunction('h5')
export let h6 = makeMyFunction('h6')
export let p = makeMyFunction('p')
export let pre = makeMyFunction('pre')
export let a = makeMyFunction('a')
export let title = makeMyFunction('title')
export let body = makeMyFunction('body')
export let li = makeMyFunction('li')
export let ul = makeMyFunction('ul')
export let table = makeMyFunction('table')
export let thead = makeMyFunction('thead')
export let tr = makeMyFunction('tr')
export let th = makeMyFunction('th')
export let tbody = makeMyFunction('tbody')
export let head = makeMyFunction('head')
export let td = makeMyFunction('td')
export let ol = makeMyFunction('ol')
export let header = makeMyFunction('header')
export let footer = makeMyFunction('footer')
export let nav = makeMyFunction('nav')
export let button = makeMyFunction('button')
export let input = makeMyFunction('input')
export let form = makeMyFunction('form')
export let select = makeMyFunction('select')
export let span = makeMyFunction('span')
export let textarea = makeMyFunction('textarea')

export let abbr = makeMyFunction('abbr')
export let address = makeMyFunction('address')
export let map = makeMyFunction('map')
export let article = makeMyFunction('article')
export let aside = makeMyFunction('aside')
export let audio = makeMyFunction('audio')
export let b = makeMyFunction('b')
export let base = makeMyFunction('base')
export let bdi = makeMyFunction('bdi')
export let bdo = makeMyFunction('bdo')
export let blockquote = makeMyFunction('blockquote')
export let canvas = makeMyFunction('canvas')
export let script = makeMyFunction('script')
export let caption = makeMyFunction('caption')
export let cite = makeMyFunction('cite')
export let code = makeMyFunction('code')
export let colgroup = makeMyFunction('colgroup')
export let data = makeMyFunction('data')
export let datalist = makeMyFunction('datalist')
export let dl = makeMyFunction('dl')
export let dd = makeMyFunction('dd')
export let dt = makeMyFunction('dt')
export let del = makeMyFunction('del')
export let ins = makeMyFunction('ins')
export let details = makeMyFunction('details')
export let dfn = makeMyFunction('dfn')
export let dialog = makeMyFunction('dialog')
export let em = makeMyFunction('em')
export let fieldset = makeMyFunction('fieldset')
export let figure = makeMyFunction('figure')
export let figcaption = makeMyFunction('figcaption')
export let iframe = makeMyFunction('iframe')
export let kbd = makeMyFunction('kbd')
export let legend = makeMyFunction('legend')
export let main = makeMyFunction('main')
export let mark = makeMyFunction('mark')
export let meter = makeMyFunction('meter')
export let noscript = makeMyFunction('noscript')
export let optgroup = makeMyFunction('optgroup')
export let picture = makeMyFunction('picture')
export let progress = makeMyFunction('progress')
export let q = makeMyFunction('q')
export let rp = makeMyFunction('rp')
export let rt = makeMyFunction('rt')
export let ruby = makeMyFunction('ruby')
export let s = makeMyFunction('s')
export let samp = makeMyFunction('samp')
export let section = makeMyFunction('section')
export let small = makeMyFunction('small')
export let strong = makeMyFunction('strong')
export let style = makeMyFunction('style')
export let sub = makeMyFunction('sub')
export let summary = makeMyFunction('summary')
export let sup = makeMyFunction('sup')
export let svg = makeMyFunction('svg')
export let template = makeMyFunction('template')
export let tfoot = makeMyFunction('tfoot')
export let time = makeMyFunction('time')
export let u = makeMyFunction('u')
export let wbr = makeMyFunction('wbr')



export let option = makeMyFunctionSingle('option')
export let img = makeMyFunctionSingle('img')
export let link = makeMyFunctionSingle('link')
export let embed = makeMyFunctionSingle('embed')
export let hr = makeMyFunctionSingle('hr')
export let area = makeMyFunctionSingle('area')
export let meta = makeMyFunctionSingle('meta')
export let object = makeMyFunctionSingle('object')
export let param = makeMyFunctionSingle('param')
export let source = makeMyFunctionSingle('source')

export let circle = makeMyFunctionSingle('circle')
export let rect = makeMyFunctionSingle('rect')
export let polygon = makeMyFunctionSingle('polygon')
export let stop = makeMyFunctionSingle('stop')
export let ellipse = makeMyFunctionSingle('ellipse')
export let track = makeMyFunctionSingle('track')


// export let template = makeMyFunction('template')
export let slot = makeMyFunction('slot')
export let i = makeMyFunction('i')

export let view = makeMyFunction('qcom-view')



