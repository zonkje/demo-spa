export class Post {

  public title: string;
  public authorName: string;
  public content: string;
  public creationDateTime: string;

  constructor(title: string, authorName: string, content: string, creationDateTime: string) {
    this.title = title;
    this.authorName = authorName;
    this.content = content;
    this.creationDateTime = creationDateTime;
  }

}
