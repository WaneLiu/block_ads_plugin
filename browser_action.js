let lists = str.split('\n').filter(v => {if (v) return true;});
<<<<<<< HEAD

=======
>>>>>>> c5c26531141537de80894135062d21de3fed1ffb
function clearAds(lists) {
  let url = location.href;
  for (let i = 0, list; list = lists[i++]; ) {
    let target_parts = list.split('$$');
    if (new RegExp(target_parts[0]).test(url)) {
      let obj = document.querySelectorAll(target_parts[1]);
      for (let j = 0, o; o = obj[j++];) {
        o.parentNode.removeChild(o);
      }
    }
  }
}

clearAds(lists);
