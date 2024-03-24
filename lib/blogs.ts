import fs, { PathLike, PathOrFileDescriptor } from 'fs';
import path from 'path';

type Metadata = {
    title: string;
    publishedAt: string;
    summary: string;
    image?: string;
    postType: string;
}

type BlogTitle = {
    title: string;
    level: number;
}

function parseFrontmatter(fileContent: string) {
    const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
    const match = frontmatterRegex.exec(fileContent);
    const frontMatterBlock = match![1];
    const content = fileContent.replace(frontmatterRegex, '').trim();
    const frontMatterLines = frontMatterBlock.trim().split('\n');
    const metadata: Partial<Metadata> = {};

    frontMatterLines.forEach((line) => {
        const [key, ...valueArr] = line.split(': ');
        let value = valueArr.join(': ').trim();
        value = value.replace(/^['"](.*)['"]$/, '$1'); // Remove quotes
        metadata[key.trim() as keyof Metadata] = value;
    });

    return { metadata: metadata as Metadata, content };
}

function getMDXFiles(dir: PathLike) {
    return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx')
}

function readMDXFile(filepath: PathOrFileDescriptor) {
    const rawContent = fs.readFileSync(filepath, 'utf-8')
    return parseFrontmatter(rawContent)
}

function getMDXData(dir: string) {
    const mdxFiles = getMDXFiles(dir);
    return mdxFiles.map((file) => {
        const { metadata, content } = readMDXFile(path.join(dir, file));
        const slug = path.basename(file, path.extname(file));
        return {
            metadata,
            slug,
            content
        }
    })
}

export function getBlogPosts() {
    return getMDXData(path.join(process.cwd(), 'content'))
}

export function getBlogTitles(content: string) {
    const titles: BlogTitle[] = [];
    const titleRegex = /^(##\s|###\s)(.+)/gm;

    const titlesArr = content.match(titleRegex);
    titlesArr?.forEach((title) => {
        if (title.startsWith('## ')) {
            titles.push({
                title: title.replace('## ', ''),
                level: 2
            })
        }

        if (title.startsWith('### ')) {
            titles.push({
                title: title.replace('### ', ''),
                level: 3
            })
        }
    })

    return titles;

}
