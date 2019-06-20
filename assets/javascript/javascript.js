var keyword = "video games"
var beginYear = 2012;
var endYear = 2019;

$.ajax ({
    url: "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+ keyword +"&begin_date="+beginYear+"0101&end_date="+endYear+"1231&api-key=xFGUMelvep9JSPsApWPqND2VCGGyL5pt",
    method: "GET"
}).then(function(news){
    console.log(news);
    var articles = news.response.docs;
    
    for(var i = 0; i < articles.length; i++) {
        var articleDiv = $("<div>");
        var headline = $("<p>");
        headline.text(articles[i].headline.main);
        var author = $("<p>");
        author.text(articles[i].byline.original);
        var section = $("<p>");
        section.text(articles[i].section_name);
        var date = $("<p>");
        date.text(articles[i].pub_date);
        var articleUrl = $("<a>");
        articleUrl.attr("href", articles[i].web_url);
        articleUrl.text(articles[i].web_url);
        articleDiv.append(headline);
        articleDiv.append(author);
        articleDiv.append(section);
        articleDiv.append(date);
        articleDiv.append(articleUrl);
        $("body").prepend(articleDiv);

        
    }

})
var submitIsClicked = false; 
function clickHandler(){ 
  submitIsClicked = true;
  console.log(submitIsClicked);
}

var element = document.getElementById('submitSearch'); // grab a reference to your element
element.addEventListener('click', clickHandler); // associate

var clearIsClicked = false; 
function clickClearHandler(){ 
  clearIsClicked = true;
  console.log(clearIsClicked);
}

var element = document.getElementById('clearSearch'); // grab a reference to your element
element.addEventListener('click', clickClearHandler); // associate
