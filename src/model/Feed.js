class Feed {
  constructor(owner, mediaUrl, likeCount, content, comments) {
    this.owner = owner;
    this.mediaUrl = mediaUrl;
    this.content = content;
    this.likeCount = likeCount;
    this.comments = comments;
  }
}

export default Feed;
