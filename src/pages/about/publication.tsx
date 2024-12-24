import { FaUsers, FaBook, FaRegCalendar } from "react-icons/fa6";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const user = {
    author_name: "Pin-Yen Huang",
    publications: [
        {
            title: "RankUp: Boosting Semi-Supervised Regression with an Auxiliary Ranking Classifier",
            authors: "Pin-Yen Huang, Szu-Wei Fu, Yu Tsao",
            year: 2024,
            booktitle: "38th Neural Information Processing Systems (NeurIPS 2024)",
            link: "https://arxiv.org/abs/2410.22124",
        },
        {
            title: "An Enhanced Mondrian Anonymization Model based on Self-Organizing Map",
            authors: "Peter Shaojui Wang, Pin-Yen Huang, Yu-An Tsai, Raylin Tso",
            year: 2020,
            booktitle: "15th Asia Joint Conference on Information Security (AsiaJCIS 2020)",
            link: "https://ieeexplore.ieee.org/abstract/document/9194139",
        },
        {
            title: "Title",
            authors: "Author",
            year: "year",
            booktitle: "Booktitle",
            link: "https://example.com",
        },
        {
            title: "Title",
            authors: "Author",
            year: "year",
            booktitle: "Booktitle",
            link: "https://example.com",
        },
        {
            title: "Title",
            authors: "Author",
            year: "year",
            booktitle: "Booktitle",
            link: "https://example.com",
        },
    ],
};

export default function Publication() {
    return (
        <Card className="w-full max-w-[64rem] rounded-xl bg-muted">
            <CardHeader>
                <CardTitle className="text-center">Publications</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
                {user.publications.map((pub, index) => (
                    <div key={index} className="bg-white rounded-xl py-4 px-4 sm:px-8 space-y-0.5">
                        <a
                            href={pub.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-base sm:text-lg font-semibold leading-tight block hover:underline"
                        >
                            {pub.title}
                        </a>
                        <span className="text-sm sm:text-base grid grid-cols-[auto,1fr] items-center gap-2 text-muted-foreground">
                            <FaUsers />
                            <span className="truncate">
                                {pub.authors.split(", ").map((author, i) => (
                                    <span
                                        key={i}
                                        className={
                                            author === user.author_name ? "font-semibold" : ""
                                        }
                                    >
                                        {author}
                                        {i < pub.authors.split(", ").length - 1 && ", "}
                                    </span>
                                ))}
                            </span>
                        </span>
                        <div className="text-sm sm:text-base grid grid-cols-[auto,1fr,auto] items-center gap-2 text-muted-foreground leading-tight">
                            <FaBook />
                            {pub.booktitle.length > 110
                                ? `${pub.booktitle.slice(0, 110)}...`
                                : pub.booktitle}
                            <div className="grid grid-cols-[auto,1fr,auto] items-center gap-2 text-right">
                                <FaRegCalendar />
                                {pub.year}
                            </div>
                        </div>
                    </div>
                ))}
            </CardContent>
        </Card>
    );
}