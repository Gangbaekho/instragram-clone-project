import Comment from "../model/Comment";
import Feed from "../model/Feed";

const dummyFeedData = new Feed(
  "dummy-user",
  "dummy-media-url",
  "dummy-content",
  0,
  [
    new Comment("user1", "hi1", "reply1"),
    new Comment("user2", "hi2", "reply2"),
    new Comment("user3", "hi3", "reply3"),
  ]
);

export default dummyFeedData;
