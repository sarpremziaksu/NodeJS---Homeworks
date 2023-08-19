/* 
Post Sıralama ve Post Ekleme
Blog oluşturmaya hazır mısınız? Konsol ekranında postlarımızı sıralayalım, 
sonrasında yeni bir post oluşturalım ve yeni post ile birlikte postlarımızı tekrar sıralayalım.

*/  


const blog = [

{
    id: 1,
    postHead : "Node.js Nedir?",
    postContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    publishedDate: "19.08.2023"
},
{
    id: 2,
    postHead : "Javascript Nedir?",
    postContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    publishedDate: "19.08.2023"
},
{
    id: 3,
    postHead : "HTML ve CSS Nedir?",
    postContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    publishedDate: "19.08.2023"
}

]

const listPosts = () => {blog.map(post => {console.log(post)})}

// listPosts();

const addPost = (newPost) => {
    return new Promise((resolve, reject) => {
        blog.push(newPost)
        resolve("Post eklendi");
        reject("Post eklenemedi");
    })
};

async function processofPost(post){
    try{
        await addPost(post);
        listPosts();
    }
    catch(error) {
        console.log("HATA: " + error);
    }
}

processofPost({id: 4, postHead: "Python Nedir?", postContent:"Python bir programlama dilidir...", publishedDate: "20.08.2023"});

processofPost({id: 5, postHead: "C# Nedir?", postContent:"C# bir programlama dilidir...", publishedDate: "20.08.2023"});
