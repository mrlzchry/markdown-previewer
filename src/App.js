import './App.css';
import { useState } from 'react';
// import Markdown from 'markdown-to-jsx';
import {marked} from 'marked';
// import hljs from "highlight.js";

// initialize string in the editor
const textEditor = `# Hi Welcome to my React Markdown Previewer.\n My name is Ammarul and nice to meet you. I want to be the very best in programming.\n
Saya sayang keluarga saya.\r
Dan saya sayang gina.
## Why I love Game of Thrones:
Here's some code of the brethren, \`<div></div>\` just kidding. Get it? Code of the brethren? From Pirates of the Caribbean? Never mind.\n
\`\`\`javascript
// This is a multiline code:\n
function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

Another code,
\`\`\`javascript
function destroyer(arr) {
  let newArr = [];
  for (let i = 0; i < arguments.length; i++){
    newArr = arguments[0].filter(currentVal => ![arguments[i]].includes(currentVal));
    arguments[0] = newArr;
  }
  return newArr;
}
\`\`\`
Once upon a time, katak in the **sky**\n
Random _quotes_ incoming!!!
"Be like **_water_**"\r
"I have a dream, that one day... ~~I forgot the last bit~~"\r
"You must be the change that you wish to see in the world"\r

Here we have the [links](https://www.freecodecamp.org), and
> Block Quotes!\r
I just took this from freeCodeCamp as I dont have anymore ideas.\r
Moving on, here's a table\n
Targaryen | Stark | Lannister
------------ | ------------- | -------------
Daenerys | Jon | Tyrion
Aegon| Arya | Jaime
- Who is worthy on the Iron Throne?.
  - One with Dragons?.
     - One with Direwolf.
        - Or one with hmmm.


1. I wanna be the very best.
1. That no one ever was!
1. Pokemon! Gotta catch them all!

Test test 123\r
Do we have a gap?

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)`;

// App component
const App = () => {

// local state
const [state, setState] = useState({
  text: textEditor
})

//Get Markdown text
const getMarkdownText = () => {
  marked.setOptions({
    langPrefix: 'hljs language-',
    highlight: function(code, lang) {
      const hljs = require('highlight.js');
      // const language = hljs.getLanguage(lang) ? lang : 'plaintext';
      return hljs.highlightAuto(code).value;
    },
    breaks: true,
    gfm: true
  })
  var rawMarkup = marked.parse(state.text);
  return {__html: rawMarkup};
}

// event handler
const handleChange = (event) => {
  setState({text: event.target.value})
}

// Initialise variable that assigned with the text for the text area
// const previewText = marked.parse(state.text);

  return (
    <div className="App">
      <a id='source-code' href='https://github.com/mrlzchry/markdown-previewer'>Source Code</a>
      <div id="editor-header">Editor
      </div>
      <textarea id="editor" onChange={handleChange}>
           {textEditor}
        </textarea>
      <div id='preview-container'>
        <div id='preview-header'>Previewer</div>
        <div id='preview' dangerouslySetInnerHTML={getMarkdownText()}>
        </div> 
      </div>
        
    </div>
    
  );
}


export default App;
