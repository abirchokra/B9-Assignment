const loadAllPosts = async (category) => {
    document.getElementById('post-container').innerHTML = '';

    const response = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts${category ? `?category=${category}` : ''}`);
    const data = await response.json();
    displayAllPost(data.posts)


}
const latestPost = async () => {
    const response = await fetch(`https://openapi.programming-hero.com/api/retro-forum/latest-posts`);
    const data = await response.json();
    displayLatestPost(data);

}
latestPost();

const displayAllPost = (posts) => {
    const postContainer = document.getElementById('post-container');
    posts.forEach((post) => {
        const div = document.createElement('div');
        div.innerHTML = `
           <div  class="flex gap-4 bg-[rgba(121,125,252,0.1)] border border-[rgb(121,125,252)]  rounded-xl p-4 ">
                        <div id="discuss-img" class="relative w-[60px] h-[60px] border border-gray-400 rounded-lg shadow-lg">
                            <img class='rounded-lg' src="${post.image}" alt="">
                            <div  class="rounded-full ${post.isActive ? 'bg-green-600' : 'bg-red-600'}  w-3 h-3 absolute top-0 right-0"></div>
                        </div>
                        <div class="space-y-4">
                            <div class="flex gap-4">
                                <p class="text-[rgba(18,19,45,0.8)]">#Category: ${post.category} </p>
                                <p id="discuss-author-name" class="text-[rgba(18,19,45,0.8)]">Author Name: ${post.author.name}</p>
                            </div>
                            <h2 id="discuss-header" class="font-bold">${post.title}</h2>
                            <p>${post.description}</p>
                            <hr class="border border-dotted border-[rgba(18,19,45,0.25)] md:w-[600px]">
                            <div class="flex space-x-4 gap-5 justify-between">
                                <div class="flex gap-4">
                                    <div class="flex items-center gap-3">
                                        <img class="w-[20px]" src="https://img.icons8.com/?size=50&id=38977&format=png"
                                            alt="">
                                        <p>${post.comment_count}</p>
    
    
                                    </div>
    
    
                                    <p id="discuss-views" class="flex items-center gap-3"> <img class="w-[20px]"
                                            src="https://img.icons8.com/?size=50&id=986&format=png" alt="">${post.view_count}</p>
    
    
    
                                    <div class="flex items-center gap-3">
                                        <img class="w-[20px]" src="https://img.icons8.com/?size=50&id=19100&format=png"
                                            alt="">
                                        <p>${post.posted_time}</p>
    
    
                                    </div>
                                </div>
                                <button>
                                <img onclick="markAsRead('${post.description}', '${post.view_count}')" id="discuss-send" src="https://img.icons8.com/?size=30&id=63497&format=png" alt="">
                                </button>
                            </div>
                        </div>
                    </div>
        
        `;
        postContainer.appendChild(div);

    })


}

const markAsRead = (description, view_count) => {
    const markAsRead = document.getElementById('markAsReadContainer');
    const div = document.createElement('div');

    div.innerHTML = `
     <div class="bg-gray-200 rounded-lg flex p-4 gap-3 m-3 ">
                        <h2 class="font-bold w-[340px]">${description}</h2>
                        <h2 class="flex items-center text-[rgba(18,19,45,0.6)] gap-2">
                            <img class="w-[20px]" src="https://img.icons8.com/?size=50&id=986&format=png" alt="">
                            ${view_count}
                        </h2>

                    </div>
     

                   
    
    `;
    markAsRead.appendChild(div);
    handleCount();



}

const handleCount = () => {
    const prevCount = document.getElementById('mark-count').innerText;
    const convertedCount = parseInt(prevCount);
    const sum = convertedCount + 1;
    document.getElementById('mark-count').innerText = sum;

}


// latest post


const displayLatestPost = (latestPosts) => {
    const latestPostContainer = document.getElementById('latest-post-container');
    latestPosts.forEach((lpost) => {
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card bg-base-100 w-96 shadow-xl p-3 text-start space-y-2">
                    <figure class="px-10 pt-10">
                        <img src="${lpost.cover_image}" alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="flex gap-3">
                    <img class='w-[20px] h-[20px] items-center' src="https://img.icons8.com/?size=50&id=23&format=png" alt="">
                    <p>${lpost.author.posted_date ? `${lpost.author.posted_date}` : 'No Publish Date' }</p>
                    </div>
                    
                    <h2 class="font-bold">${lpost.title}</h2>
                    <p class='w-full h-[80px] text-gray-600'>${lpost.description}</p>

                   
                        <div class="flex items-center gap-3">
                            <img class="w-[30px] h-[30px] rounded-full" src="${lpost.profile_image}" alt="">
                           <div>
                            <p id="post-date" class='font-bold'>${lpost.author.name}</p>
                            <p id="post-known">${lpost.author.designation ? `${lpost.author.designation}` : 'Unknown'}</p>
                           </div>
                        </div>
                   


                </div>
        
        `
        latestPostContainer.appendChild(div);

    })



}


loadAllPosts();

const handleSearchByCategory = () => {
    const searchText = document.getElementById('banner-input').value;
    // console.log(searchText);
    loadAllPosts(searchText);
}

