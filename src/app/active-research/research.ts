export class Research {
  static nextId = 0;

  id: number;
  image: string;
  name: string;
  simple_description: string;

  constructor(name: string, image: string, simple_description: string) {
    this.id = Research.nextId;
    Research.nextId += 1;
    this.image = image;
    this.name = name;
    this.simple_description = simple_description;
  }
}

