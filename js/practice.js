const loadAllPosts = async(category) => {
    const response = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
    const data = await response.json();
    console.log(data.posts)

    console.log(category)

    if (category) {
        console.log(` https://openapi.programming-hero.com/api/retro-forum/posts?category=${category}`)
        
    }else{
        console.log(' https://openapi.programming-hero.com/api/retro-forum/posts')
    } 



}
// jokhon site reload nibe tokhon eita call korbe, no parameter
loadAllPosts();

const handleSearchByCategory = () =>{
    const searchText= document.getElementById('banner-input').value;
    // console.log(searchText);
    loadAllPosts(searchText);
    // search theke jokhon call hobe tokhon search value parameter niche

}