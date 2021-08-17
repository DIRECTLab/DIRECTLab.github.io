export class Member {
  static nextId = 0

  id: number;
  image: string;
  name: string;
  simple_bio: string;

  constructor(name: string, image: string, simple_bio: string) {
    this.id = Member.nextId;
    Member.nextId += 1;

    this.image = image;
    this.name = name;
    this.simple_bio = simple_bio;
  }
}
