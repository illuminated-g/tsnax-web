import './editor/editor.css'
import Editor from './editor/editor.svelte'

const editor = new Editor({
  target: document.getElementById('editor'),
})

export default editor
