import image_1 from "../../../../assets/img/Rectangle_1.webp"
import image_2 from "../../../../assets/img/Rectangle_2.webp"
import image_3 from "../../../../assets/img/Rectangle_3.webp"
import image_4 from "../../../../assets/img/Rectangle_4.webp"
import image_5 from "../../../../assets/img/Rectangle_5.webp"
import image_6 from "../../../../assets/img/Rectangle_6.webp"

export interface CardListDataType {
    id: number,
    image: string,
    title: string,
    description: string,
    techStack: string
    srcUrl: string,
    srcGit: string,
}

export const CardListData: CardListDataType[] = [
    {
        id: 1,
        image: image_1,
        title: "Project Tile goes here",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        techStack: "HTML , JavaScript, SASS, React",
        srcUrl:"#",
        srcGit: "#",
    },
    {
        id: 2,
        image: image_2,
        title: "Project Tile goes here",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        techStack: "HTML , JavaScript, SASS, React",
        srcUrl:"#",
        srcGit: "#",
    },
    {
        id: 3,
        image: image_3,
        title: "Project Tile goes here",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        techStack: "HTML , JavaScript, SASS, React",
        srcUrl:"#",
        srcGit: "#",
    },
    {
        id: 4,
        image: image_4,
        title: "Project Tile goes here",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        techStack: "HTML , JavaScript, SASS, React",
        srcUrl:"#",
        srcGit: "#",
    },
    {
        id: 5,
        image: image_5,
        title: "Project Tile goes here",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        techStack: "HTML , JavaScript, SASS, React",
        srcUrl:"#",
        srcGit: "#",
    },
    {
        id: 6,
        image: image_6,
        title: "Project Tile goes here",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        techStack: "HTML , JavaScript, SASS, React",
        srcUrl:"#",
        srcGit: "#",
    },

]