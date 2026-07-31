class Twitter {
    constructor() {
        this.count = 0;
        this.postsMap = new Map(); // Key -> [[count, postId]]
        this.followersMap = new Map(); // Key -> Set(otherUserIds)
    }

    /**
     * @param {number} userId
     * @param {number} tweetId
     * @return {void}
     */
    postTweet(userId, tweetId) {
        if(this.postsMap.has(userId)) {
            this.postsMap.get(userId).push([this.count, tweetId]);
        } else {
            this.postsMap.set(userId, [[this.count, tweetId]]);
        }
        this.count += 1;
    }

    /**
     * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId) {
        // Get all followers of this id first.
        // console.log('Map: ', this.followersMap);
        let followers = this.followersMap.get(userId);
        // console.log('followers: ', followers);
        // Include same user's post
        if(this.followersMap.get(userId)) {
            followers.add(userId);
        } else {
            followers = new Set([userId]);
        }
        

        // Sort and get at most 10 latest from all followers.
        const mpq = new MaxPriorityQueue(q => q[0]);
        const res = [];
        
        // console.log('Followers for this user: ', followers);
        // Take the last post from each follower and add it to max heap
        for(const follower of followers) {
            // Get this follower posts, follower = userId;
            const posts = this.postsMap.get(follower);
            // console.log('Follower: ', follower);
            // console.log('Posts for this particular follower: ', posts);
            // If no posts, skip
            if(posts && posts.length > 0) {
                const lastPost = posts[posts.length - 1]; // [count, postId]
                mpq.enqueue([lastPost[0], lastPost[1], follower, posts.length - 2]);
            }
        }

        // Now the heap is sorted with last values of all followers
        // Check the heap and keep cascading for next posts and q them
        while(res.length !== 10 && mpq.size() > 0) {
            // console.log('mpq: ', mpq, mpq.size());
            const m = mpq.dequeue();
            // console.log('Popped latest freq: ', m);
            res.push(m[1]);
            const userPosts = this.postsMap.get(m[2]);
            if(m[3] >= 0) {
                mpq.enqueue([userPosts[m[3]][0], userPosts[m[3]][1], m[2], m[3] - 1]);
            }
        }

        // console.log('res: ', res);
        return res;
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    follow(followerId, followeeId) {
        // console.log('Called FOLLOW, adding ', followeeId, ' to ', followerId);
        if(this.followersMap.has(followerId)) {
            // console.log('Map has existing followers for ', followeeId, ' : ', this.followersMap.get(followeeId));
            this.followersMap.get(followerId).add(followeeId);
            return;
        }
        this.followersMap.set(followerId, new Set([followeeId]));
        return;
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId, followeeId) {
        if(this.followersMap.has(followerId)) {
            this.followersMap.get(followerId).delete(followeeId);
        }
        return;
    }
}