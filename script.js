const element=<ul>
<React.Fragment>
  <li>The fragment element is not rendered to the DOM.</li>
  <li>
    You can confirm this by right clicking on one of these items
    in the preview pane, and inspecting the markup in the browser
    dev tools.
  </li>
</React.Fragment>
</ul>;


ReactDOM.render(
  element,
  document.getElementById("root")
)

//A common pattern in React is for a component to return multiple elements.
// Fragments let you group a list of children without adding extra nodes to the DOM.