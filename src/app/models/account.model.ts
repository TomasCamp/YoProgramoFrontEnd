export class Account {
  public name: string;
  public coverImage: string;
  public profileImage: string;
  public linkedin: string;
  public github: string;
  public sections: boolean[];

  constructor(name: string, coverImage: string, profileImage: string, linkedin: string, github: string) {
    this.name = name;
    this.coverImage = coverImage;
    this.profileImage = profileImage;
    this.linkedin = linkedin;
    this.github = github;
  }

  isComplete(): boolean {
    return this.name == "";
  }
}