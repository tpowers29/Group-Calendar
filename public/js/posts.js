const newFormHandler = async (event) => {
    event.preventDefault();

    const content = document.querySelector('#content').value.trim();
    const topic = document.querySelector('#topic').value.trim();

     console.log(content,topic)
    if (content && topic) {
        const response = await fetch(`/api/posts`, {
            method: 'POST',
            body: JSON.stringify({ content, topic }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert('Failed to create new post');
        }
    }
};

const newPost = document.querySelector('.new-post-form');
if (newPost) {
    newPost.addEventListener('submit', newFormHandler);
}