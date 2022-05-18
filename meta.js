// generates meta description for a project
function metaParser(string) {
  let data = {};
  const lines = string.split("\n");
  let skip = false;
  lines.forEach((line)=>{
      if(line.includes("%")) {
        skip = true;
      }  if(skip) {
        return;
      }
      const splitted = line.split("=")
      data[splitted[0]] = splitted[1]
  });
  return data;
}

module.exports = {metaParser}