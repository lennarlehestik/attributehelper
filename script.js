const getvalues = () => {
  const data = JSON.parse(document.getElementById("textarea").value)
  data._source.store_data.forEach((value, index)=>{
      document.getElementById('store_names').innerHTML += '<a href="'+data._source.display_json.storePages[index].url+'" target="_blank">'+value.product_name+'</a><br/>'
  })
document.getElementById("name").innerHTML+= 
  '<a>'+data._source.display_json.name+'</a><br/>'
  
  data._source.display_json.preferredRatingData.forEach((value, index)=>{
  document.getElementById('aliases').innerHTML += '<a href="'+value.crawl.url+'" target="_blank">'+value.crawl.title+'</a><br/>'
})
}

//document.getElementById('store_names').innerHTML += '<a href="'+"https://www.amazon.com/"+'">'+"desiredText"+'</a><br/>'