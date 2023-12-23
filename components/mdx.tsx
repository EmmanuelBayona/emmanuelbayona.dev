import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc"
import { createElement } from "react";
import { highlight } from 'sugar-high';

const Code = ({ children, ...props }) => {
    const codeHTML = highlight(children);
    return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
}

const slugify = (str: string) => {
    return str
      .toString()
      .toLowerCase()
      .trim() // Remove whitespace from both ends of a string
      .replace(/\s+/g, '-') // Replace spaces with -
      .replace(/&/g, '-and-') // Replace & with 'and'
      .replace(/[^\w\-]+/g, '') // Remove all non-word characters except for -
      .replace(/\-\-+/g, '-'); // Replace multiple - with single -
}

const createHeading = (level: number) => {
    const Heading = ({ children }: { children: string }) => {
        const slug = slugify(children);
        const Tag = `h${level}`;
        return createElement(
            Tag,
            { id: slug },
            [
                createElement("a", { href: `#${slug}`, key: `link-${slug}`, className: "anchor" }),
            ],
            children
        );
    };
   
    Heading.displayName = `Heading${level}`;
    return Heading;
};

const components = {
    h1: createHeading(1),
    h2: createHeading(2),
    h3: createHeading(3),
    h4: createHeading(4),
    h5: createHeading(5),
    h6: createHeading(6),
    code: Code,
}

export const CustomMDX = (props: MDXRemoteProps) => {

    // const components = getMDXC

    return (
        <MDXRemote 
            {...props}
            components={{ ...components, ...(props.components || {}) }}
            // components={components}
        />
    )
}