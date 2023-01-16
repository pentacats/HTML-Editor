function refresh(){
  var editor_value = document.getElementById('editor-textarea').value;
  document.getElementById('viewer').srcdoc=editor_value;
}
