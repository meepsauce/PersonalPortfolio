
function project(data) {
  return `
  <div class="project">
  <a href="/${data.path}">
  <h3>${data.title}</h3>
  <h5>"${data.description}"</h5>
  <h6 style="float: right;"><em>Created ${data.date}</em> - Status: <b>${data.status}</b></h6>
  </a>
</div>
`
}

function category(key) {
  return `<div class="category" id="${key}"></div>`
}

fetch('./api/projects')
.then(response => response.json())
.then(data => {
  var html = [];
  var orginized = {}
  data.forEach((d) => {
    if(d.category in orginized) {
      orginized[d.category].push(project(d));
    } else {
      orginized[d.category] = [project(d)];
    }
    
  });

  const cats = Object.keys(orginized).map((key) => {
    return category(key);
  });

  document.getElementById("main").innerHTML = cats.join("");

  Object.keys(orginized).forEach((key) => {
    document.getElementById(key).innerHTML = `<h1>${key} (${orginized[key].length}):</h1><br>` + orginized[key].join("") + "<hr>";
  })
});