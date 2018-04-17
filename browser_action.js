let lists = str.split('\n').filter(v => {if (v) return true;});
console.log(lists);

function clearAds(lists) {
  let url = location.href;
  console.log(url)
  for (let i = 0, list; list = lists[i++]; ) {
    let target_parts = list.split('$$');
    console.log(target_parts);
    if (new RegExp(target_parts[0]).test(url)) {
      let obj = document.querySelectorAll(target_parts[1]);
      console.log('obj:',typeof obj)
      for (let j = 0, o; o = obj[j++];) {
        o.parentNode.removeChild(o);
      }
    }
  }
}

clearAds(lists);
