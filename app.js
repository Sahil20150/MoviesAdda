const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";



const getmovies = async(url)=>{
    const response = await fetch(url);
    const data = await response.json();
    showmovies(data);
   
}
getmovies(APIURL)



 
 const movies = document.querySelector(".movies")

function showmovies(a){
    console.log(a)
  
    movies.innerHTML =""
   
 
    a.results.forEach((item) => {
        
            const cards =  document.createElement('div');
            cards.classList.add('movie-card');
            movies.appendChild(cards);

            let bg =""

            if( item.vote_average >= 8){
                bg="green"
            }
            else if( item.vote_average >= 5){
               bg = "orange"
            }
            else{
                bg = "red"
            }
            

            cards.innerHTML =      `<div class="movie-poster"> 
                                    <img src="${IMGPATH + item.poster_path}" alt="">
                                         
                                    </div>
                                    <div class="overlay">
                                        <div class="title">
                                        ${item.title}
                                            <div class="rating  ${bg}">${item.vote_average}</div>
                                        </div>
                                        <div class="detail"> ${item.overview} </div>
                                    </div>`
    });

   
}



const search = document.querySelector("#search");


    search.addEventListener('keyup',(e)=>{
        if(e.target.value != ""){
            getmovies(SEARCHAPI + e.target.value);
        }
        else{
            getmovies(APIURL)
        }


    })

  
     







