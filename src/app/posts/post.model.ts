export class Post {

  public title: String;
  public authorName: String;
  public content: String;
  public creationDateTime: String;

  constructor(title: String, authorName: String, content: String, creationDateTime: String) {
    this.title = title;
    this.authorName = authorName;
    this.content = content;
    this.creationDateTime = creationDateTime;
  }

}
