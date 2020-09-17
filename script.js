class Comment {
    comment;
    replies = [];

    constructor(comment) {
        this.comment = comment;
    }

    getComment = function () {
        return this.comment;
    }

    addReplies(comment) {
        this.replies.push(comment);
    }

    getReplies() {
        return this.replies;
    }

}

const getAllComments = () => console.log(comments)



const submitComment = (comment, commentBox, commentsArray) => {
    if (comment.value) {

        const c = new Comment(comment.value);
        // let n = commentsArray.length;
        commentsArray[commentsArray.length] = c;

        // Make html element

        const newComment = document.createElement('div');
        newComment.classList.add('comment');


        const p = document.createElement('p');
        p.innerText = `${c.getComment()}`;

        const replyBtn = document.createElement('button'), deleteButton = document.createElement('button');
        replyBtn.innerText = 'Reply';
        deleteButton.innerText = 'Delete';
        deleteButton.addEventListener('click', () => {

            newComment.remove();
            if (commentsArray.includes(c)) {
                commentsArray.splice(commentsArray.indexOf(c), 1);
            } else {
                console.log(-1);
            }

        });


        replyBtn.addEventListener('click', () => {

            let searchBox = document.createElement('div');
            searchBox.classList.add('complete-widget');
            newComment.appendChild(searchBox);


            let input = document.createElement('textarea'), submitBtn = document.createElement('button'), cancelBtn = document.createElement('button');
            submitBtn.innerText = 'Submit';
            cancelBtn.innerText = 'Cancel';


            searchBox.appendChild(input);
            searchBox.appendChild(submitBtn);
            searchBox.appendChild(cancelBtn);

            cancelBtn.addEventListener('click', () => {
                searchBox.remove();
            })

            submitBtn.addEventListener('click', () => {
                if (input.value) {
                    // const reply= new Comment(input.value);
                    submitComment(input, newComment, c.getReplies());
                    searchBox.remove();
                    // console.log(c)
                }
                input.value = ''
            })


        })


        // Add comment to comment box

        commentBox.appendChild(newComment)
        newComment.appendChild(p)
        newComment.appendChild(replyBtn);
        newComment.appendChild(deleteButton);

    }

    comment.value = '';

}

let comments = [];

const submitMainComment = () => {

    const comment = document.getElementById('comment-input');
    const commentBox = document.getElementById('comment-box');

    submitComment(comment, commentBox, comments);

}
